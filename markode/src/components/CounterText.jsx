import React from 'react'

class CounterText extends React.Component{
    render() {
      return (
            <textarea id="counterText" placeholder="Ecris ton markdown ici" onChange={this.props.countChar}/>
      );
    }
  }

  export default CounterText