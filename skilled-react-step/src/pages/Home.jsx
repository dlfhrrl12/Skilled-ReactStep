import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

  return (
    <div>
      <h1>Home 컴포넌트 입니다.</h1>
      <button onClick={() => {
        navigate("/works")
      }}>works로 이동</button>
    </div>
  )
}

export default Home
