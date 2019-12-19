import React from 'react';

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();
let mdText = 
  (`- bla
  - blabla
  - blablabla`
  )
let result = md.render(mdText);

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: ""
        }
        this.mdToHtml = this.mdToHtml.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            text: e.target.value
        });
    }
    mdToHtml() {
        const MarkdownIt = require('markdown-it')
        const md = new MarkdownIt();
        let mdText = 
        (`- bla
        - blabla
        - blablabla`
        )
        let result = md.render(mdText);
    }
    render() {
        return (
            <div className="main">
                <div className="textBlocs">
                    <div className="mdBox">
                        <textarea 
                            className="textEditors"
                            onChange={this.onChange}>
                        </textarea>
                        <button className="editorButtons">Effacer tout</button>                    
                    </div>
                    <div className="htmlBox">
                        <textarea className="textEditors">{result}</textarea>
                        <button className="editorButtons">Exporter</button>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
