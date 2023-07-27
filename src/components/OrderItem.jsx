import React from 'react'
import RemoveButton from './RemoveButton'

function OrderItem({item,removeFromOrder}) {
  return (
    <RemoveButton item={item} doRemove={removeFromOrder}>
      <tr><td>{item.name}</td><td>{item.cost}</td></tr>
    </RemoveButton>
  )
}

export default OrderItem