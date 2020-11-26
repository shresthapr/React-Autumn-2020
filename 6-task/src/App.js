import React, { Component } from 'react';
import Form from './Component/form/form';
import View from './Component/view/view';
import Popup from './Component/popup/popup';
import Circle from './Component/display/Circle';
import './App.css';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    message: '',
    role: '',
    showPop: false,
  }
  changeHandler = (any) => {
    console.log(any)
    this.setState({
      [any.target.name]: any.target.value,
    })
    console.log(any.target.value)
  }

  showPopup = (event) => {
    this.setState({ showPop: true });
    event.preventDefault();
  }
  render() {
    const isEven = this.state.phone % 2 === 0;
    const bgColor = isEven ? 'green' : 'yellow';
    const type = isEven ? 'Even' : 'Odd';

    return (
      <div>

        <Form change={this.changeHandler} hit={this.showPopup} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          message={this.state.message}
          role={this.state.role} />

        {this.state.showPop && <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          message={this.state.message}
          role={this.state.role} />}

        <Circle isEven={isEven} color={bgColor}
          numtype={type} />

      </div>
    );
  }
}

export default App;