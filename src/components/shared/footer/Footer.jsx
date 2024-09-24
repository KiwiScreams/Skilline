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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const footerTopItems = [
    {
      src: logo,
      alt: "Skilline",
      onClick: handleNavigateToHomePage,
      className: "pointer",
    },
    {
      element: <div className="line" />,
    },
    {
      text: "Virtual Class\nfor Zoom",
      element: <h4 />,
    },
  ];

  const footerMiddleItems = [
    {
      text: "Subscribe to get our Newsletter",
      element: <h4 />,
    },
    {
      element: (
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
      ),
    },
  ];

  const footerBottomItems = [
    {
      text: "Careers",
      element: <p />,
    },
    {
      element: <div className="line" />,
    },
    {
      text: "Privacy Policy",
      element: <p />,
    },
    {
      element: <div className="line" />,
    },
    {
      text: "Terms & Conditions",
      element: <p />,
    },
    {
      text: "© 2024 Class Technologies Inc.",
      element: <p />,
    },
  ];
  return (
    <>
      <footer>
        <div className="footer-top-container">
          {footerTopItems.map((item, index) => (
            <>
              {item.element ? (
                item.element
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  onClick={item.onClick}
                  className={item.className}
                />
              )}
              {item.text && <h4>{item.text}</h4>}
            </>
          ))}
        </div>
        <div className="footer-middle-container">
          {footerMiddleItems.map((item, index) => (
            <>{item.element ? item.element : <h4>{item.text}</h4>}</>
          ))}
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom">
            {footerBottomItems.map((item, index) => (
              <>{item.element ? item.element : <p>{item.text}</p>}</>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
