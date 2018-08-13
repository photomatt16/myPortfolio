import React, { Component } from "react";

import Navbar from "./navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="mattsHomePage">
          <Navbar />
          <div className="portfolioTitle">
            <h1>Matt Warner's Portfolio</h1>
          </div>

          <div className="portfolioContent">
            <h5>
              I am a software developer who has designed apps, websites and
              more. I am experienced in JavaScript, React, Python, SQL, CSS, and
              HTML.s
            </h5>
            <div className="mattColorImage">
              <img src="/assets/colorfulFace.jpg" />
            </div>
            <h5>Scroll</h5>
          </div>
        </div>
        <div className="skillsExperience">

          <div className="projects"> 

          </div>

        </div>
        {/* <h3><a href="/contact">Contact me</a></h3> */}
      </div>
    );
  }
}
export default Home;
