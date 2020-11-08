import React from "react";
import './GameOver.css';

const closeHandler = () => {
  window.location.reload();
}


const GameOver = (props) => {
  return <div className="overlay">
    <div className="gameover_box">
      <h2>!!!Game Over!!! </h2>
      <h3>Your Score: !!!{props.score}  !!!</h3>

    </div>
    <button onClick={closeHandler}>Close</button>

  </div>
};

export default GameOver;