import React, { Component } from 'react';
import { ActionButton } from '../button-group';

const PhotoBox = ({children, position}) => (
	<div id="photo-box">
		{children[position]}
	</div>
);

const Photo = ({src, alt}) => (
	<img src={src} alt={alt} />
);

class PhotoSlider extends Component {
	constructor(){
		super();
		this.state = {
			position: 0
		};
	}

	changeSlide(position) {
		let newPosition = this.state.position + position;
		this.setState({
			position: newPosition
		});
	}

	render(){
		return (
			<div id="photo-slider">
       <PhotoBox position={this.state.position}>
       	{this.props.children}
       </PhotoBox>
       <ActionButton onClick={this.changeSlide.bind(this, -1)}>&lt; Left</ActionButton>
       &nbsp;|&nbsp;
       <ActionButton onClick={this.changeSlide.bind(this, 1)}>Right &gt;</ActionButton>
			</div>
		);
	}
}

export { 
	PhotoSlider,
	Photo
};