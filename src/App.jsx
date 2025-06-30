import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Default from './pages/Default'
import Challenge1 from './pages/Challenge1'
import Challenge2 from './pages/Challenge2'
import Challenge3 from './pages/Challenge3'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/default" element={<Default />} />
      <Route path="/challenge1" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
      <Route path="/challenge3" element={<Challenge3 />} />
    </Routes>
  )
}

export default App
