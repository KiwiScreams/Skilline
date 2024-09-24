import "./Footer.css";
import logo from "../../../assets/images/logofooter.svg";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const emailInputRef = useRef(null);
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(null);
    }
  };
  const handleSubscribe = () => {
    if (!emailError && email) {
      setTimeout(() => {
        emailInputRef.current.value = "Success";
        setTimeout(() => {
          emailInputRef.current.value = "";
        }, 2000);
      }, 50);
    }
  };
  const navigate = useNavigate();
  const handleNavigateToHomePage = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <footer>
        <div className="footer-top-container">
          <img src={logo} alt="Skilline" onClick={handleNavigateToHomePage} className="pointer"/>
          <div className="line"></div>
          <h4>
            Virtual Class
            <br /> for Zoom
          </h4>
        </div>
        <div className="footer-middle-container">
          <h4>Subscribe to get our Newsletter</h4>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              ref={emailInputRef}
            />
            {emailError && <div className="error-msg">{emailError}</div>}
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <p>Careers</p>
            <div className="line"></div>
            <p>Privacy Policy</p>
            <div className="line"></div>
            <p>Terms & Conditions</p>
          </div>
          <p>© 2024 Class Technologies Inc. </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
