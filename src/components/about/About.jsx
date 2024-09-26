import "./About.css";
import img1 from "../../assets/images/Rectangle19.png";
import img2 from "../../assets/images/Rectangle21.png";
import img3 from "../../assets/images/Group 5399.png";
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
            <div>
              <h2>FOR INSTRUCTORS</h2>
              <button>Start a class today</button>
            </div>
          </div>
          <div className="about-info">
            <div>
              <h2>FOR STUDENTS</h2>
              <button>Enter access code</button>
            </div>
          </div>
        </div>
        <div className="learn-more-container">
          <div>
            <h2>
              Everything you can do in a physical classroom,
              <span className="orange-txt"> you can do with Skilline</span>
            </h2>
            <p>
              Skilline's school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <button>Learn more</button>
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
