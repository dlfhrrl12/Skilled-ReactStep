import React from 'react'
import { Outlet } from 'react-router-dom'

function DashBoardLayout() {
  return (
    <div>
      <h1>대시 보드!</h1>
      <Outlet />
    </div>
  )
}

export default DashBoardLayout
