import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo" onClick={() => scrollTo("home")}>
        KT<span>.</span>
      </div>
      <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("about")}>About</span>
        <span onClick={() => scrollTo("skills")}>Skills</span>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </div>
      <div
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;