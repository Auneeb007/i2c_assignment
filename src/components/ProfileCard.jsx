import React from "react";
import "../assets/ProfileCard.css";

const ProfileCard = ({ name, position, avatar, isGradient }) => {
  return (
    <div className={`profile-card ${isGradient ? "gradient-card" : ""}`}>
      <img src={avatar} alt={name} />
      <div className="profile-details">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
