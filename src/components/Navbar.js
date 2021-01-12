import React from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="logo " height="50px" width="200px" />
          </Link>
          <button
            type="button"
            className="toggle-btn"
            aria-label="toggle"
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
