import React from 'react';

let ButtonGroup = React.createClass({
  render: function() {
    return <div>
    	<button>{this.props.btnName}</button>
    </div>;
  }
});

export default ButtonGroup;