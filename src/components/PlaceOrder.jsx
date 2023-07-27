import React from 'react'
import { useRef } from 'react'

function PlaceOrder({PostOrder, orders}) {
  let customerName = useRef();
  let customerPhone = useRef();

  function getOrderIds(orders) {
    let ids = [];
    for (let order of orders) {
      ids.push(order.iditem);
    }
    return ids;
  }

  const action = (e) => { PostOrder({customer:customerName.current.value,phone:customerPhone.current.value, items: getOrderIds(orders)})}

  return(
    <div>
      <div>
        <p>Your Name:</p>
        <input type='text'ref={customerName}></input>
      </div>
      <div>
        <p>Phone:</p>
        <input type='text' ref={customerPhone}></input>
      </div>
      <div>
        <button onClick={action}>Submit Order</button>
      </div>
    </div>
  )
}

export default PlaceOrder