import React from 'react';
import './App.css';
import Main from './components/Main';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="navbar">
          <Navbar searchField={this.searchField} input={this.state.input} />
        </header>
        <Main/>

      </div>
    );
  }
}

export default App;
