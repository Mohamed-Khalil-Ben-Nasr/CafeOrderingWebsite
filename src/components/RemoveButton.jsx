import React from 'react'

function RemoveButton({item,children,doRemove}) {
    const action = () => doRemove(item);
    return (
      <>
        {children}
        <button onClick={action}>Remove</button>
      </>
    )
  }

export default RemoveButton