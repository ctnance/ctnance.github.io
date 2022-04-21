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
            <a aria-label="Home" href="#intro">
              <p className="nav--list-item-text">Home</p>
            </a>
          </li>
          <li className="nav--list-item">
            <a aria-label="Projects" href="#projects">
              <p className="nav--list-item-text">Projects</p>
            </a>
          </li>
          <li className="nav--list-item">
            <a aria-label="About" href="#about">
              <p className="nav--list-item-text">About</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
