import React from "react";

function About({ name, img, description }) {
  return (
    <div className="sk">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default About;
