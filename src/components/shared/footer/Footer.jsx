import "./Footer.css";
import logo from "../../../assets/images/logofooter.svg";
const Footer = () => {
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
            <input type="email" name="email" id="email" placeholder="Your Email"/>
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
