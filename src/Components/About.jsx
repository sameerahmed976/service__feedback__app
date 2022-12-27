import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <h1 className="about">About page</h1>
      <Link to="/" className="btn btn--about">
        Back to home
      </Link>
    </main>
  );
};

export default About;
