import React from 'react';
import "./Circle.css";
// this props.color or props.click means, the event and background has not been assigned yet and are left to assign later
const Circle = (props) => {
  return <div className={`circle ${props.color} ${props.active ? " active" : ""}`}
    onClick={props.click} >
    <p>WOW</p></div>
}


export default Circle;