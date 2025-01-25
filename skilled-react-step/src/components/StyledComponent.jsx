import React from 'react'
import GlobalStyle from './GlobalStyle'
import TestPage from './TestPage'


function StyledComponent() {
  return (
    <div>
      <GlobalStyle/>  
      <TestPage title="제목입니다." contents='내용입니다.' />
    </div>
  )
}

export default StyledComponent

