import About from "../../components/about/About";
import CloudSoftware from "../../components/cloud software/CloudSoftware";
import Companies from "../../components/companies/Companies";
import Features from "../../components/features/Features";
import Layout from "../../components/layout/Layout";
import Platforms from "../../components/platforms/Platforms";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Layout />
      <Companies />
      <CloudSoftware />
      <About />
      <Features />
      <Platforms />
    </>
  );
};

export default Home;
