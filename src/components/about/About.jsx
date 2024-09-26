import "./About.css";
import img1 from "../../assets/images/Rectangle19.png";
import img2 from "../../assets/images/Rectangle21.png";

const About = () => {
  return (
    <>
      <section className="about-section">
        <h2>
          What is <span className="orange-txt">Skilline?</span>
        </h2>
        <p>
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <div className="about-infoes">
          <div className="about-info">
            <h2>FOR INSTRUCTORS</h2>
            <button>Start a class today</button>
          </div>
          <div className="about-info">
            <h2>FOR STUDENTS</h2>
            <button>Enter access code</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
