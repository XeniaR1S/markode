import React, { Component } from "react";
import Footer from './Footer'


class AllFooter extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {
      numChar: 0
    }
    
    this.countChar = this.countChar.bind(this);
  }


  countChar(event){
    this.setState({numChar: event.target.value.length});
  }
  
  render() {
    return (
        <Footer countChar={this.countChar} numChar={this.state.numChar}/>
    );
  }
}

export default AllFooter