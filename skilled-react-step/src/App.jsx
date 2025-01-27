import React from 'react'
import './App.css'
import Styled from './components/styled-components/Styled'
import StyledComponent from './components/styled-components/StyledComponent'
import UseState from './components/useHook/UseState'
import UseEffect from './components/useHook/UseEffect'
import UseRef from './components/useHook/UseRef'
import UseContext from './components/useHook/UseContext'
import MemoiZaition from './components/useHook/MemoiZaition'
import UseMemo from './components/useHook/UseMemo'
import { CustomHook } from './components/useHook/CustomHook'
import { UseSelector } from './components/redux/UseSelector'
import { ReduxTodo } from './components/redux/ReduxTodo'
import { RouterApp } from './components/react-router/RouterApp'

function App() {
  return (
    <>
    <RouterApp />
    </>
  )
}

export default App


