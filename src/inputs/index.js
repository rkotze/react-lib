import React, { PropTypes, Component } from 'react';

export class Inputs extends Component {

  constructor(props){
    super();
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ value: e.target.value });
  }

  getValue(){
    return this.state.value;
  }

  render(){
    const { type, labelText, id, ...other} = this.props;
    return (
      <div>
        <label htmlFor={id}>{labelText}</label>
        <input {...other} id={id} type={type} value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

Inputs.displayName = 'Input';

Inputs.propTypes = {
  type: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string,
  other: PropTypes.object
};

Inputs.defaultProps = {
  type: 'text'
};
