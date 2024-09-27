import "./Platforms.css";
import img from "../../assets/images/Group 5405.png";
const Platforms = () => {
  return (
    <>
      <section className="platform-section">
        <div className="image">
          <img src={img} alt="Platforms" />
        </div>
        <div className="text">
          <div className="liner">
            <div className="line"></div>
            <span>INTEGRATIONS</span>
          </div>
          <h3>200+ educational tools and platform <span className="orange-txt">integrations</span></h3>
          <p>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
        </div>
      </section>
    </>
  );
};

export default Platforms;
