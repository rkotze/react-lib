import React, { Component } from 'react';
import './style.less';

export class Toggler extends Component {
	constructor() {
		super();
		this.state = {
			className: 'toggleOff'
		};
	}

  toggle() {
  	const { className } = this.state;
  	this.setState({
  		className: className == 'toggleOff' ? 'toggleOn' : 'toggleOff'
  	})
  }

  render() {
  	const { className } = this.state;
  	const toggle = this.toggle.bind(this);
    return (
      <div>
      	{React.Children.map(this.props.children, (child) => {
      		if(child.props.toggleAction){
      			return React.cloneElement(child, {
	      			onClick: toggle
	      		});
	      	}

      		return React.cloneElement(child, {
      			className: className
      		});
      	})}
      </div>
    );
  }
}
