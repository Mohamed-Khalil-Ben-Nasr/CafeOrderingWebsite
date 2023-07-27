import React from 'react'
import OrderButton from "./OrderButton"

function MenuItem({item,addItem}) {
  return (
    <tr><td>{item.name}</td><td>{item.cost}</td><td><OrderButton item={item} addItem={addItem}></OrderButton></td></tr>
  ) 
}

export default MenuItem