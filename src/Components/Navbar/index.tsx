import { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./style.css";
import { displayState } from "../../Slice Types";
import * as ImIcons from "react-icons/im";
function Navbar() {
  const numberOfItems = useSelector(
    (state: displayState) => state.baskets.basket.length
  );
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
        <div className="menu-bars-div">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="menu-bars-close">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="navbar-brand-link">
          <div className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <Link to="/cart" className="navbar-cart">
          <ImIcons.ImCart className="cart-icon" />
          <sup>
            <span className="cart-badge">{numberOfItems}</span>
          </sup>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
