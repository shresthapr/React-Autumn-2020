import React, { Component } from "react";
import Animal from './Component/Animal/Animal';
import "./App.css";

class App extends Component {
  state = {
    animals: [
      { id: 1, name: "Elephant", img: "https://source.unsplash.com/0prglfrYY08" },
      { id: 2, name: "Lion", img: "https://source.unsplash.com/P0932ANXT0g" },
      { id: 3, name: "Zebra", img: "https://source.unsplash.com/Y0fha67MdO4" }
    ]
  };
  render() {
    const animalslist = this.state.animals.map((wildlife) => {
      return <Animal key={wildlife.id} name={wildlife.name} img={wildlife.img} />
    })


    return (

      <div className="cards" > {animalslist}


        {/* <Animal
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
 */}





      </div>
    );

  }
}
export default App;

