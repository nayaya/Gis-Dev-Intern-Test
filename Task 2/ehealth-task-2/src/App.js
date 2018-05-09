import React, { Component } from 'react';
import './App.css';
import CountriesData from "../src/client/components/CountriesData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountriesData />
      </div>
    );
  }
}

export default App;
