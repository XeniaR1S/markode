import React, { Component } from "react"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {

       
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    console.log(this.state)
    return(


    )
  }
}

};

export default Footer;