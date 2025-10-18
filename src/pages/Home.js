import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to PetStore </h1>
        <p>Your one-stop shop for adorable pets and supplies!</p>
      </header>

      <section className="home-gallery">
        <img src={require("../images/1.jpg")} alt="pet1" />
        <img src={require("../images/2.jpg")} alt="pet2" />
        <img src={require("../images/3.jpg")} alt="pet3" />
        <img src={require("../images/4.jpg")} alt="pet4" />
        <img src={require("../images/5.jpg")} alt="pet5" />
        <img src={require("../images/6.jpg")} alt="pet6" />
      </section>

      <footer className="home-footer">
        <p>💚 Caring for pets, one paw at a time 💗</p>
      </footer>
    </div>
  );
};

export default Home;
