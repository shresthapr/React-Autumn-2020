import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Circle from './component/circle/circle';
import './component/circle/circle.css';


class App extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    this.setState({ likes: this.state.likes + 1 });
    console.log('addHandler was clicked');
  };
  removeHandler = () => {
    this.setState({
      likes: this.state.likes - 1
    });
    console.log('removeHandler was clicked');
  };
  resetHandler = () => {
    this.setState({ likes: 0 })

  };


  render() {
    return (
      <div>
        <Header />

        <Circle />
        <div className="likesbuttons">
          <h1>Total likes: {this.state.likes}</h1>
          <button onClick={this.addHandler}>Add one</button>
          <button onClick={this.removeHandler}>Remove one</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;