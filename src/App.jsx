import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  )
}

export default App
