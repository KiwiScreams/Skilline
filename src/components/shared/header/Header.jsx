import "./Header.css";
import logo from "../../../assets/images/dark logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <h1>
          <img src={logo} alt="Skilline" />
        </h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Blog</Link>
            <Link to="/">About Us</Link>
            <Link to="/" className="login btn">Login</Link>
            <Link to="/" className="signup btn">Sign Up</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
