import React from "react";
import LockIcon from "/images/lock.svg";
import GraphIcon from "/images/graph.svg";
import TrophyIcon from "/images/trophy.svg";
import "../assets/Progress.css";

const Progress = () => {
  return (
    <div className="progress">
      <div className="progress-item">
        <img src={LockIcon} alt="24/7 Support" className="progress-icon" />
        <div className="progress-text">
          <h3 className="progress-title">24/7 Support</h3>
          <p className="progress-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="progress-item">
        <img src={GraphIcon} alt="1000+ reviews" className="progress-icon" />
        <div className="progress-text">
          <h3 className="progress-title">1000+ reviews</h3>
          <p className="progress-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="progress-item">
        <img src={TrophyIcon} alt="And more!" className="progress-icon" />
        <div className="progress-text">
          <h3 className="progress-title">And more!</h3>
          <p className="progress-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
