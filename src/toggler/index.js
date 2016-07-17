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
    return (
      <div>
      	<button onClick={this.toggle.bind(this)}>Toggle</button>
      	{React.Children.map(this.props.children, (child) => {
      		return React.cloneElement(child, {
      			className: className
      		});
      	})}
      </div>
    );
  }
}
