import React from 'react';
import Grade from './Grade';


class List extends React.Component {
   render() {
      
      const title = React.createElement("h4",null,"Tarantino's movies");
      const pf = React.createElement("li",null,"Pulp fiction",<Grade/>);
      const jb = React.createElement("li",null,"Jackie Brown",<Grade/>);
      const he = React.createElement("li",null,"The hateful eight",<Grade/>);
      const du = React.createElement("li",null,"Django unchained",<Grade/>);
      const ub = React.createElement("li",null,"Unglorious basterds",<Grade/>);
      const uo = React.createElement("li",null,"Once upon a time in Hollywood",<Grade/>);
      const kb = React.createElement("li",null,"Kill Bill",<Grade/>);
      const list = React.createElement("ul",null,pf,jb,he,du,ub,kb,uo);
      const container = React.createElement("div",{style: {backgroundColor: '#6C1635', color: 'white', width:'40%'}},title, list);
      return container;
   }
}

export default List;




