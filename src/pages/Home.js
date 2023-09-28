import { React } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">HackOMSCS</h1>
      <p className="lead font-weight-normal">OMSCS"s First Hackathon.</p>
      <Link to="/apply">Apply Now</Link>
    </div>
  );
}

export default Home;