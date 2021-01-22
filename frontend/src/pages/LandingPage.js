import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome in</p>
          <span>CNFCPP! </span>
        </div>

        <div className="text-section font__p p__size">
          It is new forum to help you achieve success
          <br />
          If You are looking for answers on questions on:
          <ul>
            <li>How to find a job</li>
            <li>How to kickstart your career</li>
            <li>How to improve your skills and increase your knowledge</li>
            <li>or if you just want to share your story</li>
          </ul>
          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link> and add your first post!
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="https://www.pinclipart.com/picdir/big/449-4493955_use-your-7-day-free-trial-to-build.png" className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
