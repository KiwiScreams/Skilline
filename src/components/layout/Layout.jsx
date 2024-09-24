import "./Layout.css";
import pauseImage from "../../assets/images/pause.png";
import girlImage from "../../assets/images/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png";
import img1 from "../../assets/images/Group 7.png";
import img2 from "../../assets/images/Group 9.png";
import img3 from "../../assets/images/Group 10.png";
import img4 from "../../assets/images/Group 13.png";
const Layout = () => {
  return (
    <>
      <section className="layout-section">
        <div className="text-container">
          <h2>
            <span className="orange-txt">Studying </span>
            <span className="blue-txt">
              Online is now
              <br /> much easier
            </span>
          </h2>
          <p>
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="btn-container">
            <button className="join">Join for free</button>
            <button className="pause">
              <img src={pauseImage} alt="" />
              Watch how it works
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={girlImage} alt="" className="girl" />
          <img src={img1} alt="" className="img img0" />
          <img src={img2} alt="" className="img img1" />
          <img src={img3} alt="" className="img img2" />
          <img src={img4} alt="" className="img img3" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L80,234.7C160,245,320,267,480,277.3C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Layout;
