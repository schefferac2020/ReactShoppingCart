import React from 'react';
import './App.css';
import Counter from './Counter';
import Greeter from './Greeter';
import MoodToggler from './MoodToggler';
import NavBar from './Navbar';
import Cart from './Cart';


const items = [
    { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 124},
    { id: 2, name: 'Bleach', price: 2.25, qty: 1},
    { id: 3, name: 'Visa Gift Cards', price: 223.25, qty: 3}
];

function App() {
  return (
    <div>
      <Cart initialItems={items}/>
      <Counter step={5}/>
      <MoodToggler/>
      <NavBar/>
      <Greeter name="Drew" age="62" excitement={4}/>
      <h1>Drew's first app</h1>
    </div>
    
  );
}

export default App;

