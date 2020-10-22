import React from 'react';
import './box.css';

const message = "!!If you are watching this!!"
const message2 = "The devil says Hello!!!"

function Box(props){
  return(
  <div className= "newCard">
    {message}
    <h1>{props.name}</h1>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
   {message2}
  </div>
  )
}
function Newbox() {
  return (
    <div className="newbox">
      
      <Box name="Mary" title="CEO" age="29" />
      <Box  name="Holly" title="Developer" age="25"/>
      <Box  name="Sarah" title="Designer" age="45"/>
    </div>
    
  );
}

export default Newbox;