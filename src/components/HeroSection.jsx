import React from "react";
import "../assets/HeroSection.css";
import ProfileCard from "./ProfileCard";

const profiles = [
  {
    name: "Andrea Schultz",
    position:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    avatar: "images/avatar1.svg",
  },
  {
    name: "John Doe",
    position:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    avatar: "images/avatar2.svg",
  },
  {
    name: "Jane Smith",
    position:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    avatar: "images/avatar3.svg",
  },
  {
    name: "",
    position: "",
    avatar: "",
  },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Lorem ipsum
          <div className="underline">
            <span className="highlight">dolor</span>
            <svg
              width="126"
              height="11"
              viewBox="0 0 126 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114"
                stroke="#F89D21"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          sit amet yo 👋
        </h1>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            avatar={profile.avatar}
            isGradient={index === profiles.length - 1}
          />
        ))}
      </div>
      <div className="hero-image">
        <img src="images/HeroImg.svg" alt="Hero visual" />
      </div>
    </section>
  );
};

export default HeroSection;
