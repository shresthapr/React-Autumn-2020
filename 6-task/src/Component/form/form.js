
import React from 'react';
const Form = (props) => {
  return <div className="myform">
    <form >
      <div>
        <label forhtml="firstname" >First Name:</label>
        <input type="text" name="firstname" onChange={props.newChange} placeholder="Your Name" required />
      </div>
      <div>
        <label forhtml="lastname">Last Name:</label>
        <input type="text" name="lastname" onChange={props.newChange} required />
      </div>
      <div>
        <label forhtml="phonenumber">Phone Number:</label>
        <input type="text" name="phonenumber" onChange={props.newChange} required />
      </div>
      <div>
        <label forhtml="message">Message:</label>
        <textarea type="text" name="message" onChange={props.newChange} rows="2" cols="30" required />
      </div>
      <div>
        <label forhtml="role">Role:</label>
        <select name="role" value={props.role} onChange={props.newChange}>
          <option value="Teacher" >Teacher </option>
          <option value="Instructor">Instructor </option>
          <option value="Tutor" >Tutor </option>
        </select>
      </div>
    </form>

    <div>
      <button type="submit" id="submitbtn" onClick={props.submit} >Send</button>
    </div>
  </div >
}

export default Form;


