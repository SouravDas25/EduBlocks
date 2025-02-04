import React = require('preact');
import _ = require('lodash');
import {Component} from 'preact';
import {getToolBoxXml} from '../blocks';
import {Extension} from '../types';

interface BlocklyViewProps {
    visible: boolean;
    xml: string | null;
    extensionsActive: Extension[];

    onChange(xml: string, python: string): void;
}

export default class BlocklyView extends Component<BlocklyViewProps, {}> {
    private blocklyDiv?: Element;
    private workspace?: Blockly.WorkspaceSvg;
    private xml: string | null = null;

    public componentWillReceiveProps(nextProps: BlocklyViewProps) {
        if (nextProps.visible) {
            if (this.xml !== nextProps.xml) {
                this.setXml(nextProps.xml);
            }

            // Reload blockly if the extensions have changed
            if (!_.isEqual(this.props.extensionsActive, nextProps.extensionsActive)) {
                this.loadBlockly(nextProps.extensionsActive);
            }
        }
    }

    public async componentDidMount() {
        this.loadBlockly(this.props.extensionsActive);
    }

    public render() {
        return (
            <div
                style="display: block"
                id='blockly'
                ref={(div) => this.blocklyDiv = div}>
            </div>
        );
    }

    private async loadBlockly(extensionsActive: Extension[]) {
        if (this.blocklyDiv) {
            // Kill the old workspace if it's already there...
            if (this.workspace) {
                this.workspace.dispose();
            }
            const toolbox = await getToolBoxXml(extensionsActive);


            this.workspace = Blockly.inject(this.blocklyDiv, {

                zoom:
                    {
                        controls: true,
                        wheel: true,
                        startScale: 1.0,
                        maxScale: 3,
                        minScale: 0.3,
                        scaleSpeed: 1.2,
                    },
                media: 'blockly/media/',
                collapse: false,
                toolbox,
            }) as Blockly.WorkspaceSvg;

            await this.workspace.addChangeListener(() => {
                const xml = this.getXml();

                const python = this.getPython();

                this.xml = xml;

                if (!this.workspace!.isDragging()) {
                    this.props.onChange(xml, python);
                }
            });


            Blockly.svgResize(this.workspace);

            Blockly.Generator.prototype.INDENT = '\t';

            this.setXml(this.xml);
        }
    }

    private getXml(): string {
        if (!this.workspace) {
            throw new Error('No workspace!');
        }

        const xml = Blockly.Xml.workspaceToDom(this.workspace);

        return Blockly.Xml.domToPrettyText(xml);
    }

    private getPython(): string {
        if (!this.workspace) {
            throw new Error('No workspace!');
        }

        return Blockly.Python.workspaceToCode(this.workspace);
    }

    private setXml(xml: string | null) {
        if (!this.workspace) {
            throw new Error('No workspace!');
        }

        this.workspace.clear();

        if (typeof xml === 'string') {
            const textToDom = Blockly.Xml.textToDom(xml);
            Blockly.Xml.domToWorkspace(textToDom, this.workspace);
        }
    }
}
