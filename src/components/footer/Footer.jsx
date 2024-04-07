import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Himal</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/Himalrajbhusal"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's Facebook"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/himalrajbhusal/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/himalraj07/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's linkedin"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/himalraj07"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's github"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/himalrajbhusal"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's twitter"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.youtube.com/@UntilEndGaming"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Himal Raj Bhusal's YouTube"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Himal Raj Bhusal. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
