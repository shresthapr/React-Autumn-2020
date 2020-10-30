import React, { Component } from 'react';
import './circle.css';

class Circle extends Component {

  render() {
    const { isEven, color, likes } = this.props
    return (
      <div style={{ backgroundColor: this.props.color }}
        className={'myCircle' + (isEven ? 'even' : 'odd')}>



      </div>

    )
  }
}
export default Circle;