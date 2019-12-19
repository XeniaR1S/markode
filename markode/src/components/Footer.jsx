import React from "react"
import CounterText from "./CounterText"
import Counter from "./Counter"

class Footer extends React.Component{
    render() {
      return (
        <div id="footer">
         < CounterText countChar={this.props.countChar}/>
         < Counter numChar={this.props.numChar}/>
        </div>
      );
    }
  }

  export default Footer