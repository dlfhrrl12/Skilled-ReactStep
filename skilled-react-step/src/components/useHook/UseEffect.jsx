import React, { useEffect, useState } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

function UseEffect() {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);

    // 의존성 배열 : 이 배열에 값을 넣으면 그 값이 바뀔 때만
    // useEffect를 실행할게
    useEffect(() => {
        console.log("hello useEffect")
    }, [count]);

  return (
    <div>
      <h1>useEffect</h1>
      <input type="text"
             value={value}
             onChange={(e) => {
                setValue(e.target.value)
             }}
      /> <br />
        {count} <br />
      <button onClick={() => {setCount(count + 1)}}>증가</button>

    </div>
  )
}

export default UseEffect
