import React, { Component } from 'react';

export class Form extends Component {
	constructor(){
    super();
  }

  render() {
  	const {children, ...other} = this.props;
    return (
      <form {...other}>
      	{children}
      </form>
    );
	}
}

function AddValidation(WrapperComponent) {
  return class extends Component {

    handleValidation = (e) => {
      e.preventDefault();
      console.log('Im valid');
    }

    render() {
      const { onSubmit, ...other} = this.props;
      return <WrapperComponent onSubmit={this.handleValidation} {...other} />
    }
  }
}

export const FormWithValidation = AddValidation(Form);