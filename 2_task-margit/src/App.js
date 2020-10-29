import React from "react";
import Animal from './Component/Animal/Animal';
import "./App.css";

const App = () => {
  return (
    <div className="cards">

      <Animal name="Elephant" img="" />
      <Animal name="Lion" img="" />
      <Animal name="Zebra" img="" />
    </div>
  );
};

export default App;