import "./Layout.css";
import pauseImage from "../../assets/images/pause.png";

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
