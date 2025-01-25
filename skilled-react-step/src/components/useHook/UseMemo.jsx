import React from 'react'
import HeavyComponent from './HeavyComponent'

function UseMemo() {
  return (
    <div>
      <h1>useMemo</h1>
      <nav style={{
        backgroundColor: "yellow",
        marginBottom: "30px",
      }}>내비게이션 바</nav>
      <HeavyComponent />
      <footer style={{
        backgroundColor: "green",
        marginTop: "30px"
      }}>
        푸터 영역
      </footer>
    </div>
  )
}

export default UseMemo
