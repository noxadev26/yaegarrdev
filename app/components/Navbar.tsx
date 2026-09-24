"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        YAEGAR<span>.DEV</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Beranda
        </a>

        <a href="#about" onClick={closeMenu}>
          Tentang
        </a>

        <a href="#projects" onClick={closeMenu}>
          Project
        </a>

        <a href="#services" onClick={closeMenu}>
          Jasa Web
        </a>

        <a href="#feedback" onClick={closeMenu}>
          Saran & Kritik
        </a>
      </div>
    </nav>
  );
}