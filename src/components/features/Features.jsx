import "./Features.css";
import img from "../../assets/images/Group 5404.png";
import img1 from "../../assets/images/Group 5401.png";
import img2 from "../../assets/images/Group 5402.png";
import img3 from "../../assets/images/Group 5403.png";

import img4 from "../../assets/images/Group 122.png";
import img5 from "../../assets/images/Group 92.png";
import img6 from "../../assets/images/Group 124.png";
import img7 from "../../assets/images/Group 106.png";

const Features = () => {
  const data = [
    {
      title: "Tools For Teachers And Learners",
      text: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
      image: img4,
      orangeText: "Tools",
      classname: "reverse",
    },
    {
      title: "Assessments, Quizzes, Tests",
      text: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
      image: img5,
      orangeText: "Quizzes, Tests",
    },
    {
      title: "Class Management Tools for Educators",
      text: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
      image: img6,
      orangeText: "Class Management",
      classname: "reverse",
    },
    {
      title: "One-on-One Discussions Tests",
      text: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
      image: img7,
      orangeText: "Tests",
    },
  ];
  const listItems = [
    {
      img: img1,
      text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    },
    {
      img: img2,
      text: "TA's and presenters can be moved to the front of the class.",
    },
    {
      img: img3,
      text: "Teachers can easily see all students and class data at one time.",
    },
  ];
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
                {listItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt="Skilline" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {data.map((item, index) => (
              <div key={index} className={`container ${item?.classname}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="text">
                      <h2>
                        <span className="orange-txt">{item.orangeText}</span>{" "}
                        {item.title.replace(item.orangeText, "")}
                      </h2>
                      <p>{item.text}</p>
                    </div>
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="text">
                      <h2>
                        {item.title.replace(item.orangeText, "")}{" "}
                        <span className="orange-txt">{item.orangeText}</span>
                      </h2>
                      <p>{item.text}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="see-more">See more features</button>
      </section>
    </>
  );
};

export default Features;
