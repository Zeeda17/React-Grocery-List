import React from 'react';

const Grocery = props =>{
  // debugger

  return(
    <li>{props.name}<button onClick={props.handleButtonClick}>Type</button></li>
  )
};

export default Grocery;
