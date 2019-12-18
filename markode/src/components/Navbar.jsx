import React from 'react';


function Navbar() {
  return (
    <div className="App">
      <h1>marKode</h1>
      <input onChange={props.searchField} value={props.input} id='searchField' type = 'text' placeholder = 'mot'></input>
      <button onClick = {props.getWords} className='navButton' value ='search'>Rechercher</button>
    </div>
  );
}

export default Navbar;