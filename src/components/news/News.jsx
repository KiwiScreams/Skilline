import "./News.css";
import img1 from "../../assets/images/../../assets/Group 5405.png";
import img2 from "../../assets/images/../../assets/Group 5405.png";
import img3 from "../../assets/images/../../assets/Group 5405.png";

const News = () => {
  const newData = [
    {
      imgSrc: img1,
      imgAlt: "Skilline",
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    },
    {
      imgSrc: img2,
      imgAlt: "Skilline",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      text: "Class Technologies Inc., the company that created Class,...",
    },
    {
      imgSrc: img3,
      imgAlt: "Skilline",
      title:
        "Zoom's earliest investors are betting millions on a better Zoom for schools",
      text: "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      imgSrc: img2,
      imgAlt: "Skilline",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      text: "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];
  return (
    <>
      <section className="new-section">
        <div className="core-new">
          <img src="" alt="" />
          <h3>lorem</h3>
          <p>lorem ipsum lalalalala la la</p>
          <button>Read more</button>
        </div>
      </section>
    </>
  );
};

export default News;
