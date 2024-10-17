import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection";
import ProfileCard from "./components/ProfileCard.jsx";
import RegistrationForm from "./components/RegistrationForm";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/Footer.jsx";
import Progress from "./components/Progress.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Progress />
      <TrustedBy />
      <section className="registration">
        <RegistrationForm />
      </section>
      <Footer />
    </div>
  );
};

export default App;
