import React from 'react';

export const BestMovie = (props) => {
  const { movie } = props;
  
  console.log('Rendering BestMovie');
  return (<div style={{ color: 'yellow' }}>BestMovie ever: {movie}</div>);
};


