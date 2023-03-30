import { Link } from "react-router-dom"

const Navbar = ({user}) => {
  return (
    <div className="navbar">
        <span className="logo">
          <Link to="/" className="link">Social App</Link>
        </span>
        {
          user ? (
            <ul className="list">
              <li className="listItem">
                  <img src="https://images.pexels.com/photos/9442483/pexels-photo-9442483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
              </li>
              <li className="listItem">John Doe</li>
              <li className="listItem">Logout</li>
          </ul>
          ) : (<Link to="/login" className="link">Login</Link>)
        }
        
    </div>
  )
}

export default Navbar