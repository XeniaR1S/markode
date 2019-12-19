import React from 'react';
import Footer from './Footer';
import NavTools from './navTools/NavTools';

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: "",
            numChar: 0
        }
        this.mdToHtml = this.mdToHtml.bind(this);
        this.countChar = this.countChar.bind(this);
        this.combinedMethods = this.combinedMethods.bind(this);
        this.deleteMD = this.deleteMD.bind(this);
    }
    mdToHtml(event){
        const MarkdownIt = require('markdown-it')
        const md = new MarkdownIt();
        let text = event.target.value;
        let result = md.render(text);
        this.setState({
            text: result
        });
    }
    countChar(event){
        this.setState({numChar: event.target.value.length});
    }
    combinedMethods(e) {
        this.mdToHtml(e)
        this.countChar(e)
    }
    deleteMD() {
        this.setState({text: ''})
    }
    render() {
        return (
            <div className="main">
                <NavTools />
                <div className="mainTools">
                    <div className="textBlocs">
                        <div className="mdBox">
                            <textarea 
                                className="textEditors"
                                onChange={this.combinedMethods}>
                            </textarea>
                            <button className="editorButtons">Effacer tout</button>                    
                        </div>
                        <div className="htmlBox">
                            <textarea 
                                readOnly
                                className="textEditors"
                                value={this.state.text}></textarea>
                            <button className="editorButtons">Exporter</button>    
                        </div>
                    </div>
                    <Footer countChar={this.countChar} numChar={this.state.numChar}/>
                </div>
            </div>
        )
    }
}

export default Main;
