import React, { Component } from 'react';

export class Form extends Component {
	constructor(){
    super();
  }

  render() {
  	const {children} = this.props;
    return (
      <form>
      	{children}
      </form>
    );
	}
}

