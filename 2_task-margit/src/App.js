import React, { Component } from "react";
import Animal from './Component/Animal/Animal';
import "./App.css";

class App extends Component {
  state = {
    animals: [{ name: "Elephant", img: "https://source.unsplash.com/0prglfrYY08" },
    { name: "Lion", img: "https://source.unsplash.com/P0932ANXT0g" },
    { name: "Zebra", img: "https://source.unsplash.com/Y0fha67MdO4" }
    ]
  };
  render() {
    return (

      <div className="cards">

        <Animal
          name={this.state.animals[0].name}
          img={this.state.animals[0].img}
        />
        <Animal
          name={this.state.animals[1].name}
          img={this.state.animals[1].img}
        />
        <Animal
          name={this.state.animals[2].name}
          img={this.state.animals[2].img}
        />

      </div>
    );

  }
}
export default App;

