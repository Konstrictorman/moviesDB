import React from "react";

export default class PureComponentTest extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         moviesList : [
            {title: "Pulp Fiction"},
            {title: "Kill Bill"},
            {title: "Unglorious Basterds"},
            {title: "The hateful eight"}
         ]
      }
   }

   componentDidMount() {
      setInterval(() => {
         this.setState((oldState)=> {
            return { moviesList: [...oldState.moviesList]}
         });
      }, 1500);
   }

   render() {
      console.log("movie list rendered");
      return(
         <div>
            {this.state.moviesList.map((task,i) => {
               return (<Movie key={i} title={task.title} />); 
            })}
         </div>
      );
   }
}

class Movie extends React.PureComponent {
   render() {
      console.log("movie added");
      return (<div style={{color:'yellow'}}>{this.props.title}</div>)
   }
}