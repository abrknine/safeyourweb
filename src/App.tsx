import { Routes, Route } from 'react-router-dom'
import './App.css'
import Base from './routes/Base'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Base/>}/>
    </Routes>
</>

  )
}

export default App
