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
            <img src={google} alt="" />
            <img src={netflix} alt="" />
            <img src={airbnb} alt="" />
            <img src={amazon} alt="" />
            <img src={facebook} alt="" />
            <img src={grab} alt="" />
        </div>
      </section>
    </>
  );
};

export default Companies;
