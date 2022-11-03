import React from "react";
import ReactStars from "react-rating-stars-component";

class Grade extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         grade: 0,
      }
   }

	ratingChanged = (newRating) => {
		console.log(newRating);
      this.setState({
         grade: newRating,
      });
	};

   handleChange(e) {
      console.log(JSON.stringify(e));
   }

	render() {
		return (
         <>
			<ReactStars
				count={5}
				onChange={this.ratingChanged}
				size={24}
				activeColor="#ffd700"
            isHalf={true}
			/>
         <label style={{fontWeight:'bold', marginLeft:'15px'}}>{this.state.grade}</label>
         </>
		);
	}
}

export default Grade;
