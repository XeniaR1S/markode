import React from 'react'

class Counter extends React.Component{
    render() {
      return (
          <p id="counter">You inserted {this.props.numChar} characters</p>
      );
    }
  }

  export default Counter