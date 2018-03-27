import React from 'react';
import Grocery from './Grocery'


let groceryData = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

const GroceryList = props =>{
  let handleButtonClick = props.handleButtonClick;

  let groceries
  if (props.groceries) {
    groceries=props.groceries.map(food =>{
      return(
        <Grocery
          key={food.id}
          name={food.name}
          handleButtonClick={handleButtonClick}
        />
      )
    });
  }



  return(
    <ul>
      {groceries}
    </ul>
  )
};

export default GroceryList;
