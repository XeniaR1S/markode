import React from 'react'

class Counter extends React.Component{
    render() {
      return (
        <div id="counter">
          <p>You inserted {this.props.numChar} characters</p>
        </div>
      );
    }
  }

  export default Counter