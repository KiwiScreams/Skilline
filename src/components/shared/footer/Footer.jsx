import "./Footer.css";
import logo from "../../../assets/images/logofooter.svg";
import { useState, useEffect } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
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
      console.log("Subscribed successfully!");
    }
  };
  return (
    <>
      <footer>
        <div className="footer-top-container">
          <img src={logo} alt="" />
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
            />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
