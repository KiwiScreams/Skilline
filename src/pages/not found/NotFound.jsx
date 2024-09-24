import "./NotFound.css";
import notFoundImage from "../../assets/images/404-error.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => 
  {
    navigate("/");
  }
  return (
    <>
      <section className="notfound-section">
        <div>
          <img src={notFoundImage} alt="" />
          <h2>Oops!</h2>
          <p>
            It looks like the page you're looking for doesn't exist. It might
            have been moved, deleted, or never existed in the first place.
          </p>
          <button>Go Home</button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
