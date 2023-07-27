import { useState } from 'react'
import './App.css'

import {Menu, Order, PlaceOrder} from "./components/index";


function App() {
  const [orders,setOrders] = useState([]);

  function showConfirm(response){
    console.log("Your Order has been placed!");
  }

  function PostOrder(toPost) {
    fetch('https://cmsc106.net/cafe/purchase', {
      method: 'POST',
      body: JSON.stringify(toPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json()).then(response => showConfirm(response));
  }

  function addToOrder(item) {
    setOrders([...orders,item])
  }
  
  function removeFromOrder(item) {
    setOrders(orders.filter((orderItem) => {return orderItem.name !== item.name}))
  }

  return(
    <>  
      <Menu addItem={addToOrder} />
      <Order orders={orders} removeFromOrder={removeFromOrder} />
      <PlaceOrder orders={orders} PostOrder={PostOrder}></PlaceOrder>
    </>
  )
}         

export default App


