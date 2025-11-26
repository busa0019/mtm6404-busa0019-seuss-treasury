import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar.jsx"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <header className="main-header">
        <h1 className="main-title">Seuss Treasury</h1>
        <p className="subtitle">Discover the Magical World of Dr. Seuss</p>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="main-footer">
        <p>Made with 💙 for Dr. Seuss fans everywhere by Faozee</p>
      </footer>
    </div>
  )
}

export default App;