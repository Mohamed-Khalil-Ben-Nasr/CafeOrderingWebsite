import React from 'react'

function OrderButton({item,addItem}) {
  const action = () => addItem(item)
  return (
    <button onClick={action}>Order</button>
  )
  }

export default OrderButton