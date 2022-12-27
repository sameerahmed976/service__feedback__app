import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

Link;
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to="/about" className="question">
          <FaQuestion />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
