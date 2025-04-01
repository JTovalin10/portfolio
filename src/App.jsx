import { useState } from 'react'
import MainMenu from './components/MainMenu'
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [count, setCount] = useState(0)
  return (
   <>
    <MainMenu/>
   </>
  )
}

export default App