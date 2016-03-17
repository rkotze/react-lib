import React, { Component } from 'react';

const ActionButton = ({children, actionId}) => (
  <button data-action-id={actionId}>
    {children}
  </button>
);

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        {this.props.actionList.map((B, i) => {
          return <B.action key={i} action-id={B.actionId}>{B.text}</B.action>
        })}
      </div>
    );  
  }
}

ButtonGroup.defaultProps = {
  actionList: [{
    action: ActionButton,
    actionId: 1,
    text: "No Action"
  }]
};

export { 
  ButtonGroup,
  ActionButton
};