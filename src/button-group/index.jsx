import React, { Component } from 'react';

const ActionButton = (props) => {
  let { actionId, children, onClick } = props;
  return (
    <button data-action-id={actionId} onClick={onClick}>
      {children}
    </button>
  );
};

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <ul>
          {React.Children.map(this.props.children, (Action) => {
            return <li>{Action}</li>
          })}
        </ul>
      </div>
    );  
  }
}

export { 
  ButtonGroup,
  ActionButton
};