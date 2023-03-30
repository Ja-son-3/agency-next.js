import "./app.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Post from "./pages/Post"

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  )
}

export default App