import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
  ButtonGroup, 
  ActionButton, 
  PhotoSlider 
} from 'ReactLib';

export class WebApp extends Component {
  render() {
    return (
      <div>
	      <h2>Button Group</h2>
	      <ButtonGroup>
	      	<ActionButton actionId="1" onClick={() => console.log('howdy')}>
	      		Action 1
	      	</ActionButton>
	      	<ActionButton actionId="2">
	      		Action 2
	      	</ActionButton>
	      </ButtonGroup>

	      <h2>Photo Slider</h2>
	      <PhotoSlider />
      </div>
    );
  }
}

render(<WebApp />, 
  document.getElementById('web-app'));