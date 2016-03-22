import React, { Component } from 'react';
import actionStyle from './button-group.less';

const ActionButton = (props) => {
  let { actionId, children, onClick } = props;
  return (
    <button className="action-button" data-action-id={actionId} onClick={onClick}>
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