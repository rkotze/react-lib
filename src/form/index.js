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

    constructor() {
      super();
      this.state = { fields: {} };
    }

    static defaultProps = {
      id: 'defaultForm'
    }

    handleValidation = (e) => {
      const fields = document.getElementById(this.props.id);
      const result = Object.keys(fields).reduce((acc, name) =>{
        const field = fields[name];
        if(field.name && field.value)
          acc[field.name] = field.value;
        return acc;
      }, {});
      this.props.onSubmit(e, result);
      console.log('Im valid');
    }

    render() {
      const { onSubmit, id, ...other} = this.props;
      return <WrapperComponent {...other} id={id} onSubmit={this.handleValidation} />
    }
  }
}

export const FormWithValidation = AddValidation(Form);