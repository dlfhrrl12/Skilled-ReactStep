import React, { useState } from 'react'
import Child from './Child';

function UseState() {
    const [count, setCount] = useState(0);
    // const handleCountPlus = () => {
    //     setCount(count + 1);
    // }
  return (
    <div>
       <h1>여기는 부모 컴포넌트 입니다.</h1>
       <span>현재 카운트 : {count}</span>
       <Child setCount={setCount}/>
    </div>
  )
}

export default UseState
