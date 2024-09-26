import About from "../../components/about/About";
import CloudSoftware from "../../components/cloud software/CloudSoftware";
import Companies from "../../components/companies/Companies";
import Layout from "../../components/layout/Layout";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Layout />
      <Companies />
      <CloudSoftware />
      <About />
    </>
  );
};

export default Home;
