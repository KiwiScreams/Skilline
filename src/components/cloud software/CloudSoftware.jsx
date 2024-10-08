import "./CloudSoftware.css";
import img1 from "../../assets/images/Group 5396.svg";
import img2 from "../../assets/images/Group 5397.svg";
import img3 from "../../assets/images/Group 5398.svg";
const softwareInfo = [
  {
    img: img1,
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    img: img2,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    img: img3,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
  },
];
const CloudSoftware = () => {
  return (
    <>
      <section className="software-section">
        <h3>
          All-In-One <span className="orange-txt">Cloud Software.</span>
        </h3>
        <p>
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className="boxes">
          {softwareInfo.map((info, index) => (
            <div key={index} className="box">
              <img src={info.img} alt={info.title} />
              <h4>{info.title}</h4>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CloudSoftware;
