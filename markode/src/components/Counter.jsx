import React from 'react'

class Counter extends React.Component{
    render() {
      return (
          <p id="counter">Votre texte contient {this.props.numChar} caractère(s)</p>
      );
    }
  }

  export default Counter
  