import React from "react";

class SearchBox extends React.PureComponent {
   state = {
      text: '',
   }

   handleSubmit = (e) => {
      e.preventDefault();
      console.log("Searching for:", this.state.text);
   }

   handleChange = (e) => {
      
      this.setState({text: e.target.value});
   }

	render() {
		return (
			<div>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					<input type="text" name="search" placeholder="Search..." value={this.state.text} onChange={(e)=>this.handleChange(e)}/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default SearchBox;
