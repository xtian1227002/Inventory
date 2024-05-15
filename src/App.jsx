import { useState } from 'react'
import DataForm from '../component/dataForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataForm/>
    </>
  )
}

export default App
