import "./Header.css";
import logo from "../../../assets/images/dark logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="desktop">
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
      <header className="mobile">
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
    </>
  );
};

export default Header;
