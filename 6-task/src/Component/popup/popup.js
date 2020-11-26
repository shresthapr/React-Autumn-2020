import React, { Component } from 'react';
import './popup.css';


const close = () => {
  window.location.reload();
}
class Popup extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="popup">
          <h1>This is the Popup</h1>
          <p>First Name: <span>{this.props.firstname}</span></p>
          <p>Last Name:<span>{this.props.lastname}</span> </p>
          <p>Phone: <span>{this.props.phone}</span></p>
          <p>Message:<span>{this.props.message}</span> </p>
          <p>Role: <span>{this.props.role}</span></p>
          <button onClick={() => close()}>close</button>
        </div>
      </div>
    );
  }
}

export default Popup;