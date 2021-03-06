import React, { Component } from 'react';
import { ActionButton } from '../button-group';
import partition from 'lodash/partition';

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
		let newPosition = this.state.position;
		if(this.shouldChange(this.props.children, this.state.position + position)){
			newPosition = this.state.position + position;
		}
		this.setState({
			position: newPosition
		});
	}

	shouldChange(children, position){
		return position >= 0 && position < children.length;
	}

	// just trying this life cycle out
	shouldComponentUpdate(nextProps, nextState) {
		return this.shouldChange(nextProps.children, nextState.position);
	}

	render(){
		console.log(partition(this.props.children, (child) => {
			return child.props.id == "1"
		}));
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