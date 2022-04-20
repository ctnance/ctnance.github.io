import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav--logo" href="/">
          <span className="nav--logo-text">CN</span>
        </a>
        <ul className="nav--list">
          <li className="nav--list-item">
            <a aria-label="Home" href="#home">
              Home
            </a>
          </li>
          <li className="nav--list-item">
            <a aria-label="Projects" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav--list-item">
            <a aria-label="About" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
