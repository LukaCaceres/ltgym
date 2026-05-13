import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">LTGym</div>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#precios" onClick={closeMenu}>
            Precios
          </a>
        </li>

        <li>
          <a href="#reviews" onClick={closeMenu}>
            Reviews
          </a>
        </li>

        <li>
          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>
        </li>

         <li>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;