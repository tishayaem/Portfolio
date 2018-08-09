import React, { Component } from 'react';

import './App.css';
import Skills from './Skills';
import Photo from './Photo';

class App extends Component {
  render() {
    return (
      <h1 className="App">
        <header className="App-header">   
         
        </header>
 
        <div className="greeting">
          <h2>Hello</h2><h2 className="animated zoomInDown delay-5s">I am Constantin Kalinin</h2><h2 className="animated zoomInUp fast delay-2s">your friendly web developer</h2>
        </div>
        <Photo />
 
        <Skills />
 
      </h1>
    );
  }
}

export default App;
