import React from 'react';
import './App.css';

const message = "!!If you are watching this!!"
const message2 = "The devil says Hello!!!"

function Box(props){
  return(
  <div className= "cards">
    {message}
    <h1>{props.name}</h1>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
   {message2}
  </div>
  )
}
function NewApp() {
  return (
    <div className="App">
      
      <Box name="Maria" title="CEO" age="29" />
      <Box  name="Katri" title="Developer" age="25"/>
      <Box  name="Karin" title="Designer" age="45"/>
    </div>
    
  );
}

export default NewApp;
