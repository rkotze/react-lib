import React from 'react';
import ReactDOM from 'react-dom';

let ButtonGroup = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

export default ButtonGroup;