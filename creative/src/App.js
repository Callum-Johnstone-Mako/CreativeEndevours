import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import NavBar from './NavBar' // Make sure to import the NavBar component
import TwoExample from './TwoExample'

function App() {
  return (
    <Router>
      <div>
        <AppContent />
      </div>
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/draw' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<TwoExample />} />
      </Routes>
    </>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default App
