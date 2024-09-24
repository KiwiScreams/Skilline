import "./Header.css";
import logo from "../../../assets/images/dark logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);
  const navigate = useNavigate();
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
    if (scrollPosition > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleNavigateToHomePage = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Blog", to: "/" },
    { label: "About Us", to: "/" },
  ];
  return (
    <>
      <header className={`desktop ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="pointer">
          <img src={logo} alt="Skilline" onClick={handleNavigateToHomePage} />
        </h1>
        <nav>
          {navItems.map((item, index) => (
            <Link key={index} to={item.to}>
              {item.label}
            </Link>
          ))}
          <div className="btn-container">
            <button className="login btn">Login</button>
            <button className="signup btn">Sign Up</button>
          </div>
        </nav>
      </header>
      <header
        className={`mobile ${isScrolled ? "scrolled" : ""}`}
        ref={headerRef}
      >
        <h1 className="pointer">
          <img src={logo} alt="Skilline" onClick={handleNavigateToHomePage} />
        </h1>
        <nav ref={mobileNavRef} className={`${isMenuOpen ? "open" : "closed"}`}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.to} onClick={handleLinkClick}>
              {item.label}
            </Link>
          ))}
          <div className="btn-container">
            <button className="login btn">Login</button>
            <button className="signup btn" onClick={handleLinkClick}>
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
