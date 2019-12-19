import React from 'react';

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: ""
        }
        this.mdToHtml = this.mdToHtml.bind(this)
    }
    mdToHtml(e){
        const MarkdownIt = require('markdown-it')
        const md = new MarkdownIt();
        let text = e.target.value;
        let result = md.render(text);
        this.setState({
            text: result
        });
    }
    render() {
        return (
            <div className="main">
                <div className="textBlocs">
                    <div className="mdBox">
                        <textarea 
                            className="textEditors"
                            onChange={this.mdToHtml}>
                        </textarea>
                        <button className="editorButtons">Effacer tout</button>                    
                    </div>
                    <div className="htmlBox">
                        <textarea 
                            className="textEditors"
                            value={this.state.text}></textarea>
                        <button className="editorButtons">Exporter</button>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
