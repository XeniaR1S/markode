import React from 'react';
import Footer from './Footer';
import NavTools from './navTools/NavTools';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      numChar: 0,
      attributMd: ''
    };
    this.myRef = React.createRef();

    this.mdToHtml = this.mdToHtml.bind(this);
    this.countChar = this.countChar.bind(this);
    this.combinedMethods = this.combinedMethods.bind(this);
    this.onClickAttribut = this.onClickAttribut.bind(this);
  }

  onClickAttribut(e) {
    console.log(this.myRef.current.selectionStart);
    this.setState({
      text: this.state.text + e.target.value
    });
  }

  mdToHtml(event) {
    const MarkdownIt = require('markdown-it');
    const md = new MarkdownIt();
    let text = event.target.value;
    let result = md.render(text);
    this.setState({
      text,
      attributMd: result
    });
  }
  countChar(event) {
    this.setState({ numChar: event.target.value.length });
  }
  combinedMethods(e) {
    this.mdToHtml(e);
    this.countChar(e);
  }
  render() {
    return (
      <div className="main">
        <NavTools
          onClickAttribut={this.onClickAttribut}
          attributMd={this.state.attributMd}
        />
        <div className="mainTools">
          <div className="textBlocs">
            <div className="mdBox">
              <textarea
                ref={this.myRef}
                className="textEditors"
                onChange={this.combinedMethods}
                value={this.state.text}
                autoFocus
              ></textarea>
              <button className="editorButtons">Effacer tout</button>
            </div>
            <div className="htmlBox">
              <textarea
                readOnly
                className="textEditors"
                value={this.state.attributMd}
              ></textarea>
              <button className="editorButtons">Exporter</button>
            </div>
          </div>
          <Footer countChar={this.countChar} numChar={this.state.numChar} />
        </div>
      </div>
    );
  }
}

export default Main;
