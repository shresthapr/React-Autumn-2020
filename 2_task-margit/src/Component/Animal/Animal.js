import React from 'react';
import "./Animal.css"

const greetingText = (name) => {
  console.log(name);
  alert(`Hello, I am ${name}.Nice to meet you!`);
};

const Animal = (props) => {
  return (
    <div className="animalCard">
      <h1>{props.name}</h1>
      <img alt={props.name} src={props.img} />
      <button onClick={() => greetingText(props.name)}>Click me!</button>
    </div>
  );
};

export default Animal;