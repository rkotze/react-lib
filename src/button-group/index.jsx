import React from 'react';


const DeleteAccount = ({children, btn}) => (
  <div>
    <p>Are you sure?</p>
    <div>Yep</div>
    <button {...btn}>{children}</button>
  </div>
);

let ButtonGroup = React.createClass({
  render: function() {
  	const bprops = {
  		color: 'silver',
  		cursor: 'red'
  	};
    return <div>
    	<button>{this.props.btnName}</button>
    	<DeleteAccount btn={bprops}>Delete Me</DeleteAccount>
    </div>;
  }
});

export default ButtonGroup;