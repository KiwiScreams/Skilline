import "./CloudSoftware.css";
import img1 from "../../assets/images/Group 5396.svg";
import img2 from "../../assets/images/Group 5397.svg";
import img3 from "../../assets/images/Group 5398.svg";

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
          <div className="box">
            <img src={img1} alt="" />
            <h4>Online Billing, Invoicing, & Contracts</h4>
            <p>
              Simple and secure control of your organization's financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div className="box">
            <img src={img2} alt="" />
            <h4>Easy Scheduling & Attendance Tracking</h4>
            <p>
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div className="box">
            <img src={img3} alt="" />
            <h4>Customer Tracking</h4>
            <p>
              Automate and track emails to individuals or groups. Skilline's
              built-in system helps organize your organization
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSoftware;
