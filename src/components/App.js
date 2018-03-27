// src/components/App.js
import React from 'react';
import GroceryList from './GroceryList';
import Grocery from './Grocery';

const App = props => {
  let groceryData = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" }
  ];

  return(
    <div>
      <h1>Grocery List</h1>

      <GroceryList
        groceries={groceryData}
        handleButtonClick={ (event) => { alert('Button was clicked')}
      }/>
    </div>
  )
};

export default App;


// import React from 'react';

// const App = props => {
//   return(
//     <div>
//       <h1>Grocery List</h1>
//
//       <ul>
//         <li>
//           Oranges
//           <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
//         </li>
//         <li>
//           Bananas
//           <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
//         </li>
//         <li>
//           Bread
//           <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
//         </li>
//       </ul>
//     </div>
//   );
// };
//
// export default App;
