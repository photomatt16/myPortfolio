import React, { Component } from "react";

import Navbar from "./navbar";

class Photography extends Component {
  render() {
    return (
      <div className="mattsPhotographyPage">
        <Navbar />
        <div className="photographyImage">
          <img src="/assets/logo.jpg" />
        </div>

        <div className="contactInfo">
          <h6>Email: mattwarner14@yahoo.com</h6>
          <h6>Facebook: https://www.facebook.com/themwphotography/</h6>
          <h6>Instagram: @the_mwphotography</h6>
        </div>

        <div className="photoTitle">
          <h1>Matt Warner's Photography</h1>
        </div>

        <div className="photoContent">
          <h5>
            I am a lover of this earth and the people in it. I created this site
            because I love to capture this earth so others can see! I am able to
            take engagement photos, senior or graduation photos, missionary
            photos, and wedding photos. Please enjoy these samples and go to my
            facebook or instagram for more. Contact me if you have questions.
          </h5>

          <h3>
            <a href="/contact">Contact me</a>
          </h3>
        </div>
      </div>
    );
  }
}
export default Photography;
