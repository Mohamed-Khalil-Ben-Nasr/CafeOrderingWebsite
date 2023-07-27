import React from 'react'
import MenuItem from './MenuItem';
import { useState, useEffect } from 'react'



function Menu({addItem}) {
  const [menu, setMenu] = useState([]);
  const [meal, setMeal] = useState(["lunch"]);

  useEffect(fetchMenu,[]);

  function filterToMeal() {
    return menu.filter((item) => item.meal == meal);
  }

  function fetchMenu() {
    //fetch() code goes here
    //.then calls setMenu()
    fetch('https://cmsc106.net/cafe/item').then(response => response.json()).then(response => { setMenu(response); });
  }

  return (
    <div>
      <table>
        <tr><th>Item</th><th>Cost</th><th></th></tr>
        {filterToMeal().map(item => <MenuItem item={item} addItem={addItem}></MenuItem>)}
      </table>
      <div>
        <button onClick={()=>setMeal("breakfast")}>breakfast</button>
        <button onClick={()=>setMeal("lunch")}>lunch</button>
        <button onClick={()=>setMeal("dinner")}>dinner</button>
      </div>
    </div>
  )
}

export default Menu