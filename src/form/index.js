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

    static defaultProps = {
      id: 'defaultForm'
    }

    handleSubmit = (e) => {
      const fields = document.getElementById(this.props.id);
      console.log(arguments);
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
      return <WrapperComponent {...other} id={id} onSubmit={this.handleSubmit} />
    }
  }
}

export const FormWithValidation = AddValidation(Form);