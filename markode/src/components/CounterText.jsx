import React from 'react'

class CounterText extends React.Component{
    render() {
      return (
        <div id="counterText">
            <textarea placeholder="Ecris ton markdown ici" onChange={this.props.countChar}/>
        </div>
      );
    }
  }

  export default CounterText