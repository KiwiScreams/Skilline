import "./Features.css";
import img from "../../assets/images/Group 5404.png";
const Features = () => {
  return (
    <>
      <section className="features-section">
        <h3>
          Our <span className="orange-txt">Features</span>
        </h3>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="interface">
          <div className="img">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
            <img src={img} alt="Skilline" />
          </div>
          <div className="text">
            <h2>A <span className="orange-txt">user interface</span> designed for the classroom</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
