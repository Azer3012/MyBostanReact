import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main">
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          My<span>Bostan</span>
        </h3>

        <p className="footer-links">
        <NavLink to="/home" >
            Ana Səhifə
          </NavLink>
          ·<NavLink to="/category" >
            Kateqoriyalar
          </NavLink>
          ·<NavLink to="/about" >
            Haqqımızda
          </NavLink>·
          <NavLink to="/contact">
            Əlaqə
          </NavLink>
        </p>

        <p className="footer-company-name">CodersAzerbaijan &copy; 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Bakı şəhəri</span> Bakı, Azərbaycan
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+994556505995</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">Azer0297206@gmail.com.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Web Dev Trick is a blog for web designers, graphic designers, web
          developers &amp; SEO Learner.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>

  );
};

export default Footer;
