import React, { Component } from 'react';


class Circle extends Component {
  render() {
    const { isEven, color } = this.props
    return (

      <div style={{ backgroundColor: color }}
        className={"newCircle" + (isEven ? 'even' : 'odd')}
      >
        <h5>  Number is {this.props.numtype}</h5>
      </ div >
    );
  }
}

export default Circle;