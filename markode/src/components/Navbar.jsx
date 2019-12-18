import React from 'react';
import '../App.css';


//button onClick = {props.getWords}
function Navbar(props) {
  return (
    <div className = 'navbar_container'>
      <div>
        <h1><img src='logo_markode.png' alt='logo' className='navbar_title'/></h1>
      </div>
      <div className='search_container'>
        <input onChange={props.searchField} value={props.input} id='searchField' type ='text' placeholder ='Rechercher un mot ou chaîne'></input>
        <button value ='search'>
          <img src='icon_search.svg' className='navbar_search_btn' alt='button_search' />
        </button>
      </div>
      <div className='search_method'>
        <label for='word'>
          <input type='radio' id='word' name='method' value='word' />
          Rechercher par mot
        </label>
        <label for="string">
          <input type='radio' id='string' name='method' value='string' />
          Rechercher par chaîne
        </label>
      </div>
    </div>
  );
}

export default Navbar;