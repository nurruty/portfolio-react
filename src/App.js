import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction/Introduction.js';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Experience from './components/experiencie/Experience';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction></Introduction>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
