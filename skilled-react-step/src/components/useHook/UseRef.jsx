import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const idRef = useRef("");
    
    useEffect(() => {
        idRef.current.focus();

    }, [])

  return (
    <div>
        <div>
            ID : <input type="text" ref={idRef} />
        </div>
        <div>
            Password : <input type="password" />
        </div>
    </div>
  )
}

export default UseRef
