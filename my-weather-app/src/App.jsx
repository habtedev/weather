// App root: keeps the top-level render minimal and delegates
// UI and state handling to the `Home` page component.
import './App.css'
import Home from './pages/home'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
