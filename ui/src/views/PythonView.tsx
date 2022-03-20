import React = require('preact');
import _ = require('lodash');
import {Component} from 'preact';

const ace = (self as any).ace;

interface PythonViewProps {
    visible: boolean;
    python: string | null;

    onChange(python: string): void;
}

export default class PythonView extends Component<PythonViewProps, {}> {
    private editorDiv?: Element;
    private editor: any;


    public componentWillReceiveProps(nextProps: PythonViewProps) {
        if (nextProps.visible) {
            // Need to check visible change as well to force refresh
            if (this.getCode() !== nextProps.python || this.props.visible !== nextProps.visible) {
                this.setCode(nextProps.python);
            }
        }
    }

    public componentDidMount() {
        if (!this.editorDiv) {
            throw new Error('No editor div');
        }

        this.editor = ace.edit(this.editorDiv);

        this.editor.setTheme('ace/theme/monokai');
        this.editor.getSession().setMode('ace/mode/xml');
        this.editor.setOptions({
            fontSize: "16pt"
        });
        this.editor.on('change', _.debounce(() => {
            const code = this.getCode();

            this.props.onChange(code);
        }, 100));
    }

    public render() {
        return (
            <div style={{display: this.props.visible ? 'block' : 'none'}} id='python'>
                <div id='editor' ref={(div) => this.editorDiv = div}></div>
            </div>
        );
    }

    private getCode(): string {
        return this.editor.getValue();
    }

    private setCode(code: string | null) {
        this.editor.setValue(code || '');
    }
}
