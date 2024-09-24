import "./Header.css";
import logo from "../../../assets/images/dark logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);
  const headerRef = useRef(null);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleOutsideClick = (event) => {
    if (isMenuOpen && !headerRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <>
      <header className={`desktop ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="pointer">
          <img src={logo} alt="Skilline" />
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About Us</Link>
          <div className="btn-container">
            <button className="login btn">Login</button>
            <button to="/" className="signup btn">
              Sign Us
            </button>
          </div>
        </nav>
      </header>
      <header
        className={`mobile ${isScrolled ? "scrolled" : ""}`}
        ref={headerRef}
      >
        <h1 className="pointer">
          <img src={logo} alt="Skilline" />
        </h1>
        <nav ref={mobileNavRef} className={`${isMenuOpen ? "open" : "closed"}`}>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Careers
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            About Us
          </Link>
          <div className="btn-container">
            <button className="login btn">Login</button>
            <button to="/" className="signup btn" onClick={handleLinkClick}>
              Sign Us
            </button>
          </div>
        </nav>
        <div
          className={`bar-container ${isMenuOpen ? "change" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
