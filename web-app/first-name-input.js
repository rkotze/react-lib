import React, { PropTypes, Component } from 'react';
import { Inputs } from 'ReactLib';

export class FirstNameInput extends Component {

  constructor(){
    super();
    this.getFirstName = this.getFirstName.bind(this);
  }

  getFirstName(){
    console.log('was called');
    console.log(this.firstName.getValue());
  }

  render(){
    const { type, labelText, id } = this.props;
    return (
      <div>
        <Inputs ref={(firstName) => this.firstName = firstName } onBlur={this.getFirstName} />
      </div>
    );
  }
}
