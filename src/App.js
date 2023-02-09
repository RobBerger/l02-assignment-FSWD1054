import React from 'react';
import experience from './Experience.js';
import './Experience.css';

function App() {
  let experienceList = experience.map( (myExperience) => {
    return (
    <li class = 'listItem'>
      <div class = 'title'>{myExperience.jobTitle}, {myExperience.companyName}</div>
      <div class = 'descript'>{myExperience.description}</div>
    </li>
    )})
  return (
    <div className="App">
      <h1>My Work Experience</h1>
      
      <ul>{experienceList}</ul>

    </div>
  );
}

export default App;
