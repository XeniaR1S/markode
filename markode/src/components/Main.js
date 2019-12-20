import React from 'react';
import Footer from './Footer';
import NavTools from './navTools/NavTools';
import Navbar from './Navbar'
import Highlighter from "react-highlight-words";

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: "",
      numChar: 0,
      countWord: 0,
      input: ''
    }
    this.mdToHtml = this.mdToHtml.bind(this);
    this.countChar = this.countChar.bind(this);
    this.handleCountWords = this.handleCountWords.bind(this);
    this.combinedMethods = this.combinedMethods.bind(this);

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

  counterWords(event) {
    let counttext = event.target.value;
    let table = counttext.split(/[\s|.|,|'|:|;|?|!|~|*|#|(|)|-|_|<|>]+/g);
    if (table[table.length-1] === "") {
        table.splice(table.length-1, 1)
    }
    let result = table.length;
    return(
      result
    );
  }

  countChar(event){
    this.setState({numChar: event.target.value.length});
  }
  combinedMethods(e) {
    this.mdToHtml(e)
    this.countChar(e)
    this.handleCountWords(e)
  }
 handleCountWords(event){
    this.setState({countWord: this.counterWords(event)});
  }
 

    searchField = (event)=>{
        this.setState({input: event.target.value})
    }

    onSearch = () => {
        let count = 0
        let result
        let input = this.state.input
        let text = this.state.text
        let table = text.split(/<\/?[a-z0-9]*>/g).join("").split(/[\s\.|\,|'|:|;|?|!|#]+/g)
        if (table[table.length-1] === "") {
            table.splice(table.length-1, 1)
        }
        for (let i = 0 ; i < table.length; i++){
            if(input === table[i]){
                count++
            }
        }
        result = count
        return result
    }


    render() {
        return (
            <div>
                <header className="navbar">
                    <Navbar onSearch={this.onSearch} searchField={this.searchField} input={this.state.input} />
                </header>
                <div className="main">
                    <NavTools />
                    <div className="textBlocs">
                        <div className="mdBox">
                            <textarea 
                                className="textEditors"
                                onChange={this.combinedMethods}>
                            </textarea>
                            <button className="editorButtons">Effacer tout</button>                    
                        </div>
                        <div className="htmlBox">
                            <Highlighter 
                            className='textEditors'
                            autoEscape={true}
                            searchWords={[this.state.input]}
                            textToHighlight={this.state.text}
                            />
                            <button className="editorButtons">Exporter</button>    
                        </div>
                    </div>
                    <Footer countChar={this.countChar} numChar={this.state.numChar}/>
                </div>
                <Footer countChar={this.countChar} numChar={this.state.numChar}  countWord={this.state.countWord}/>
            </div>
        )
    }
}

export default Main;
