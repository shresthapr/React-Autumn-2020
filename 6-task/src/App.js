import React, { Component } from 'react';
import './App.css';
import Form from './Component/form/form';
import View from './Component/view/view';
import Popup from './Component/popup/popup';


class App extends Component {
  state = {
    showPopup: false,
    firstname: '',
    lastname: '',
    phonenumber: '',
    message: '',
    role: ''

  }

  changeHandler = (event) => {
    console.log('Hello')
    this.setState({

      [event.target.name]: event.target.value,
    });
  }

  submitHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  }
  render() {

    return (
      <div>
        <Form newChange={this.changeHandler} submit={this.submitHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />

        {this.state.showPopup && <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />}

      </div >
    );
  }
}


export default App;


