import React from "react"
import Counter from "./Counter"

class Footer extends React.Component{
    render() {
      return (
        <div id="footer">
          < Counter numChar={this.props.numChar}/>
        </div>
      );
    }
  }

  export default Footer
