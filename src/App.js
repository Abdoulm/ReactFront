import './App.css';
import React from 'react';
import InstructorApp from './component/InstructorApp';
import { Component } from 'react';

class App extends Component() {
  render(){

    return (
      <div className="container">
        <InstructorApp/>
      </div>
    );
  }
}

export default App;
