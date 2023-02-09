import React from 'react';
import experience from './Experience.js';
import './Experience.css';

function App() {
  let myExperience = experience[0]
  return (
    <div className="App">
      <h1>My Work Experience</h1>
      <div>{myExperience.jobTitle}, {myExperience.companyName}</div>
      <div>{myExperience.description}</div>
    </div>
  );
}

export default App;
