import "./Features.css";
import img from "../../assets/images/Group 5404.png";
const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="interface">
          <div className="img">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h2>lorem ipsum</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
