import React from "react";
import ReactStars from "react-rating-stars-component";

class Grade extends React.Component {
	ratingChanged = (newRating) => {
		console.log(newRating);
	};

	render() {
		return (
			<ReactStars
				count={5}
				onChange={this.ratingChanged}
				size={24}
				activeColor="#ffd700"
			/>
		);
	}
}

export default Grade;
