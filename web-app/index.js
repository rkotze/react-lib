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
	      <ButtonGroup />

	      <h2>Photo Slider</h2>
	      <PhotoSlider />
      </div>
    );
  }
}

render(<WebApp />, 
  document.getElementById('web-app'));