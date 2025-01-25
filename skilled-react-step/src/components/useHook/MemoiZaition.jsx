import React, { useCallback, useState } from 'react'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

function MemoiZaition() {
    const [count, setCount] = useState(0);
    console.log("App 컴포넌트가 렌더링 되었습니다.");

    const onPlusButtonClickHandler = () => {
      setCount(count + 1);
    }

    const onMinusButtonClickHandler = () => {
      setCount(count - 1);
    }

    const initCount = useCallback( () => {
      setCount(0);
      console.log(`[count 변경] ${count}에서 0으로 변경 되었습니다.`);
    }, [count])
  return (
    <div>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+1</button>
      <button onClick={onMinusButtonClickHandler}>-1</button>
      <div style={{
        display: "flex",
        marginTop: "10px",
      }}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </div>
  )
}

export default MemoiZaition
