import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import ReduxCounter from './component/ReduxCounter'
function App() {

  return (
    <>
    <h1>without using redux</h1>
      <Counter/>
      <h1>using redux</h1>
      <ReduxCounter/>
    </>
  )
}

export default App
