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
            <span className="orange-txt">Studying</span>
            <span className="blue-txt">Online is now much easier</span>
          </h2>
          <p>
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <button>Join for free</button>
          <button><img src={pauseImage} alt="" /></button>
        </div>
      </section>
    </>
  );
};

export default Layout;
