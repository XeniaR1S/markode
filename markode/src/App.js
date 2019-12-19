import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input:'',
    }
    this.searchField=this.searchField.bind(this)
  }
  searchField = (event)=>{
    this.setState({input: event.target.value})
  }
  render(){
    return (
      <div className="App">
        <header className="navbar">
          <Navbar searchField={this.searchField} input={this.state.input}/>
        </header>
        <Main />
      </div>
    );
  }
}

  export default App;
