
const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Social App</span>
        <ul className="list">
            <li className="listItem">
                <img src="https://images.pexels.com/photos/9442483/pexels-photo-9442483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  )
}

export default Navbar