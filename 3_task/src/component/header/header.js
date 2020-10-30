import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <div className="header-class">
        <h1> This is an example of event handling practice exrecise</h1>
        <div id="time-div" style={{ color: "white", padding: "2rem", fontSize: '2rem' }}>

          {this.state.date.toLocaleDateString()}
        </div>


      </div >

    );
  }
}

export default Header;

