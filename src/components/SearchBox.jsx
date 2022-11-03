import React from "react";

class SearchBox extends React.PureComponent {

   constructor(props) {
      super(props);
      this.state = {
         text: "",
      };
   
   }
/*
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Searching for:", this.state.text);
	};
*/
   handleSubmit(e) {
		e.preventDefault();
		console.log("Searching for:", this.state.text);      
   }

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="search"
						placeholder="Search..."
						value={this.state.text}
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default SearchBox;
