import "./Companies.css";
import google from "../../assets/images/google.png";
import netflix from "../../assets/images/netflix.png";
import airbnb from "../../assets/images/airbnb.png";
import amazon from "../../assets/images/amazon.png";
import facebook from "../../assets/images/facebook.png";
import grab from "../../assets/images/grab.png";
const Companies = () => {
  return (
    <>
      <section className="companies-section">
        <p>Trusted by 5,000+ Companies Worldwide</p>
        <div className="companies">
            <img src={google} alt="Google logo" />
            <img src={netflix} alt="Netflix logo" />
            <img src={airbnb} alt="Airbnb logo" />
            <img src={amazon} alt="Amazon logo" />
            <img src={facebook} alt="Facebook logo" />
            <img src={grab} alt="Grab logo" />
        </div>
      </section>
    </>
  );
};

export default Companies;
