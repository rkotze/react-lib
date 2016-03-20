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
       <PhotoBox src="http://placehold.it/250x250?text=best+test+image" alt="test image" />
			</div>
		);
	}
}

export { PhotoSlider };