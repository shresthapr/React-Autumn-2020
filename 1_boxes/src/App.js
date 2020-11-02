// import React from 'react';
import React, { Component } from 'react';
import './App.css';



const message = "!!If you are watching this!!"
const message2 = "The devil says Hello!!!"

function Box(props) {
  return (
    <div>
      <div className="cards">
        {message}
        <h1>{props.name}</h1>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        {message2}
      </div>
    </div>
  )
}
// function NewApp() {

//   return (
//     <div className="App">

//       <Box name="Maria" title="CEO" age="29" />
//       <Box name="Katri" title="Developer" age="25" />
//       <Box name="Karin" title="Designer" age="45" />
//     </div>

//   );
// }

// export default NewApp;


class NewApp extends Component {
  state = {
    persons: [
      { id: 1, name: "Maria", title: "CEO", age: "29" },
      { id: 2, name: "Katri", title: "Developer", age: "25" },
      { id: 3, name: "Karin", title: "Designer", age: "45" }
    ]
  }
  render() {
    const personlist = this.state.persons.map((person) => {
      return <Box key={person.id} name={person.name} title={person.title} age={person.age} />;
    })
    return (
      <div className="App">{personlist}</div>
    )
  }
}
export default NewApp;