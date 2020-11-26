
import React, { Component } from 'react';


class form extends Component {
  render() {
    return (
      <div className="myform">
        <form onSubmit={this.props.hit}>
          <div>
            <label forhtml="firstname">Firstname</label>
            <input type="text" name="firstname" onChange={this.props.change} required />
          </div>
          <div>
            <label forhtml="lastname">Lastname</label>
            <input type="text" name="lastname" onChange={this.props.change} required />
          </div>
          <div>
            <label forhtml="phonenumber">Phone</label>
            <input type="text" name="phone" onChange={this.props.change} required />
          </div>
          <div>
            <label forhtml="message">Message</label>
            <input type="textarea" name="message" rows="2" cols="30" onChange={this.props.change} required />
          </div>
          <div>
            <label forhtml="role">Role</label>
            <select name="role" onChange={this.props.change}>
              <option value=""></option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>
          <input type="submit" value="Send" />
        </form>


      </div>
    );
  }
}

export default form;