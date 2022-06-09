import React = require('preact');
import {Component} from 'preact';

const ace = (self as any).ace;

interface Props {
    visible: boolean;
    turtle: boolean;
    pythonCode: string;

    onClose(): void;
}

export let josh = "hi"

export default class TrinketView extends Component<Props, {}> {

    private editorDiv?: Element;
    private editor: any;

    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        window.addEventListener('keydown', this.escapeListener);
        if (!this.editorDiv) {
            throw new Error('No editor div');
        }

        this.editor = ace.edit(this.editorDiv);

        this.editor.setTheme('ace/theme/monokai');
        this.editor.getSession().setMode('ace/mode/json');
        this.editor.setOptions({
            fontSize: "13pt"
        });
    }

    public componentDidUpdate() {
        if (this.props.pythonCode || this.props.pythonCode.trim().length > 0) {
            // Need to check visible change as well to force refresh
            // this.setCode(this.props.pythonCode);
            this.sendCode(this.props.pythonCode);
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeListener);
    }

    public close() {
        this.props.onClose();
    }

    public render() {
        return (
            <div class='TrinketView' style={{display: this.props.visible ? 'block' : 'none'}} id='terminal-dialog'>
                <div class='terminal-help'>
                    <a class='icon-cancel-circled' title="Create new file" href='javascript:void(0)'
                       onClick={() => this.close()}>
                        Exit
                    </a>
                </div>

                <div class='TrinketView__Container'>
                    <div id='editor' ref={(div) => this.editorDiv = div}></div>
                </div>

            </div>
        );
    }

    private escapeListener = (e: KeyboardEvent) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    private setCode(code: string) {
        let parsed = JSON.parse(code);
        code = JSON.stringify(parsed, null, '\t')
        this.editor.setValue(code || '');
    }


    private sendCode(code: string) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/xml");

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: code,
            redirect: 'follow'
        };

        fetch("https://dt-backend-chatty-dog-nt.cfapps.ap21.hana.ondemand.com/process", requestOptions)
            .then(response => response.text())
            .then(result => this.setCode(result))
            .catch(error => console.log('error', error));
    }
}
