import "./Features.css";
import img from "../../assets/images/Group 5404.png";
import img1 from "../../assets/images/Group 5401.png";
import img2 from "../../assets/images/Group 5402.png";
import img3 from "../../assets/images/Group 5403.png";
const Features = () => {
  return (
    <>
      <section className="features-section">
        <div>
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
              <h2>
                A <span className="orange-txt">user interface</span> designed
                for the classroom
              </h2>
              <ul>
                <li>
                  <img src={img1} alt="Skilline" />
                  Teachers don't get lost in the grid view and have a dedicated
                  Podium space.
                </li>
                <li>
                  <img src={img2} alt="Skilline" />
                  TA's and presenters can be moved to the front of the class.
                </li>
                <li>
                  <img src={img3} alt="Skilline" />
                  Teachers can easily see all students and class data at one
                  time.
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <h2>
                <span className="orange-txt">Tools</span> For Teachers And
                Learners
              </h2>
              <p>
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>

            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <h2>
                Assessments, <span className="orange-txt">Quizzes, Tests</span>
              </h2>
              <p>
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="text">
              <h2>
                <span className="orange-txt">Class Management</span> Tools for
                Educators
              </h2>
              <p>
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>

            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="text">
              <h2>
                One-on-One Discussions <span className="orange-txt">Tests</span>
              </h2>
              <p>
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
