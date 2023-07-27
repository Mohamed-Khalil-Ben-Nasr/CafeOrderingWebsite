import React from 'react'
import OrderItem from './OrderItem'

function Order({orders,removeFromOrder}) {
  return(
    <div>
      <table>
        <tr><th>Item</th><th>Cost</th><th></th></tr>
        {orders.map(item => <OrderItem item={item} removeFromOrder={removeFromOrder}></OrderItem>)}
      </table>
    </div>
  )
}

export default Order