import React from "react"
import Counter from "./Counter"

class Footer extends React.Component{
    render() {
      return (
        <div className="footer">
          < Counter numChar={this.props.numChar}/>
        </div>
      );
    }
  }

  export default Footer
