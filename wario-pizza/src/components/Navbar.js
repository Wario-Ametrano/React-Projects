import { useState } from "react";
import logo from "../assets/pizzaLogo.png";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom";

export default function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/"><img src={logo} /></Link>
        <div className="hiddenLinks"id={openLinks ? "open" : "close"}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}><ReorderIcon /></button>
      </div>
    </div>
  );
}
