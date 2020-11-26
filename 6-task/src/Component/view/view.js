import React, { Component } from 'react';


class view extends Component {
  render() {
    return (
      <div className="mynotes">
        <h1>This is the viewport</h1>
        <p>First Name: <span>{this.props.firstname}</span></p>
        <p>Last Name:<span>{this.props.lastname}</span> </p>
        <p>Phone: <span>{this.props.phone}</span></p>
        <p>Message:<span>{this.props.message}</span> </p>
        <p>Role: <span>{this.props.role}</span></p>
      </div>
    );
  }
}
export default view;

//Code is  destructured like this

// const View = ({ firstname, lastname, phone, message, role }) => {
//   return (
//     <div className="mynotes">
//       <p>First name<span>{firstname}</span></p>
//       <p>Last name<span>{lastname}</span></p>
//       <p>Message<span>{message}</span></p>
//       <p>Phone Number<span>{phone}</span></p>
//       <p>Role<span>{role}</span></p>
//     </div>
//   );
// };
// export default View;
