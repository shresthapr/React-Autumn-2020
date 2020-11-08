import React, { Component } from 'react';
import Circle from './Component/Circle/Circle';
import GameOver from './Component/GameOver/GameOver';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const overAlert = () => {
  const sound = new Audio('/assets/sound.mp3');
  sound.play();
}
class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "red" },
      { id: 3, color: "yellow" },
      { id: 4, color: "blue" }
    ],
  };
  pace = 1500;
  timer = undefined;
  clickHandler = (id) => {
    var sound = new Audio('/assets/sound.mp3');
    sound.currentTime = 30;
    sound.play();
    console.log('Circle ' + id + ' has been clicked')
    if (this.state.current !== id) {
      this.stopHandler();
      sound.currentTime = 0;
      sound.play();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("Active circle is: ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  }

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({ showGameOver: true });
  }
  over = () => {
    window.navigator.vibrate(200);

  }


  render() {
    const circles = this.state.circles.map(item => {
      return (
        <Circle
          key={item.id}
          color={item.color}
          click={() => this.clickHandler(item.id)}
          active={this.state.current === item.id}
        />);
    });
    return (
      <div >
        <h1> SpeedGame</h1>
        <p> Your Score is: {this.state.score}</p>
        <p> {this.over}</p>
        <div>
          {circles}
        </div>
        <button onClick={this.startHandler}>Start </button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}
export default App;
