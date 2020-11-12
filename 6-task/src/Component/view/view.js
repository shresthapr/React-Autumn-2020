import React, { Component } from 'react';


const View = (props) => {
  return <div className="myview">
    <div className="mynotes">
      <p>First name :&nbsp;<span>{props.firstname}</span></p>
      <p>Last name :&nbsp;<span>{props.lastname}</span></p>
      <p>Phone number :&nbsp;<span>{props.phonenumber}</span></p>
      <p>Message :&nbsp;<span>{props.message}</span></p>
      <p>Role :&nbsp;<span>{props.role}</span></p>
    </div>
  </div>
}
export default View;

