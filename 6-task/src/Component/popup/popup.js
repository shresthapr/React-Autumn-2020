import React from 'react';
import './popup.css';

const quitOperation = () => {
  window.location.reload();
}

const PopUp = (props) => {
  return <div className="popupoverlay">
    <h1> Your note:</h1>
    <div class="popupnote">
      <p>First name :&nbsp;<span>{props.firstname}</span></p>
      <p>Last name :&nbsp;<span>{props.lastname}</span></p>
      <p>Phone number :&nbsp;<span>{props.phonenumber}</span></p>
      <p>Message :&nbsp;<span>{props.message}</span></p>
      <p>Role :&nbsp;<span>{props.role}</span></p>
    </div>
    <div>
      <button id="closebtn" onClick={quitOperation}>Close</button>
    </div>
  </div>
}

export default PopUp;