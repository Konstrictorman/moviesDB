import React from 'react';
import MenuItem from './MenuItem';

export const Menu = () => {
  return (
    <div className="menu_container">

      <MenuItem label="ALL"/>
      <MenuItem label="DOCUMENTARY"/>
      <MenuItem label="COMEDY"/>
      <MenuItem label="HORROR"/>
      <MenuItem label="CRIME"/>

      <div className='menu_item menu_right'>SORT BY</div>
    </div>
  );
};
