import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import {FaMapMarker} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="main">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            My<span>Bostan</span>
          </h3>
          
          <p className="footer-links">
            <NavLink to="/home">Ana Səhifə</NavLink>·
            <NavLink to="/category">Kateqoriyalar</NavLink>·
            <NavLink to="/about">Haqqımızda</NavLink>·
            <NavLink to="/contact">Əlaqə</NavLink>
          </p>

          <p className="footer-company-name">CodersAzerbaijan &copy; 2020</p>
        </div>

        <div className="footer-center">
          <div>
            <i><FaMapMarker/></i>
            <p>
              <span>Bakı şəhəri</span> Bakı, Azərbaycan
            </p>
          </div>

          <div>
            <i>
              <FaPhone/>
            </i>
            <p>+994556505995</p>
          </div>

          <div>
            <i>
              <FaEnvelope/>
            </i>
            <p>
              <a href="mailto:azer0297206@gmail.com">Azer0297206@gmail.com.com</a>
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
            <a href="https://www.facebook.com/azer.abishov.1/">
              <i>
                <FaFacebookSquare/>
              </i>
            </a>
            <a href="https://twitter.com/?lang=tr">
              <i><FaTwitterSquare/></i>
            </a>
            <a href="https://www.linkedin.com/in/azer-abi%C5%9Fov-5778a8184/">
              <i><FaLinkedin/></i>
            </a>
            <a href="https://github.com/Azer3012">
              <i><FaGithubSquare/></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
