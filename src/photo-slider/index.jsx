import React, { Component } from "react";

const PhotoBox = ({src, alt}) => (
	<div id="photo-box">
		<img src={src} alt={alt} />
	</div>
	);

class PhotoSlider extends Component {
	render(){
		return (
			<div id="photo-slider">
       <PhotoBox src="http://lorempixel.com/400/200/sports/1/" alt="sports" />
			</div>
		);
	}
}

export { PhotoSlider };