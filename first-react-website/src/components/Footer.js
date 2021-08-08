import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-2">
        <p className="footer-header">Get In Touch</p>
        <div className="input-container">
          <input type="text" className="input-format" placeholder="Name" />
          <input type="email" className="input-format" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="text" className="input-format-2" placeholder="Subject" />
        </div>
        <div className="input-container">
          <input type="text" className="input-format-3" placeholder="Message" />
        </div>
        <button className="btn-style">Send</button>
      </div>
      <div className="footer-container-3">
        <i
          className="fa fa-map-marker-alt"
          style={{
            fontSize: "20px",
            color: "#e0a80d",
          }}
        />
        <p>
          Maharana Pratap Residency
          <br /> Kota 324002, Rajasthan
        </p>
        <i
          className="fa fa-phone"
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#e0a80d",
          }}
        />
        <p>
          7381527345
          <br /> 8619093221
        </p>
        <i
          className="fa fa-envelope"
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#e0a80d",
          }}
        />
        <p>
          mahendra55555555@gmail.com
          <br /> mahenderkumar1998jan@gmail.com
        </p>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">all rights reserved © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              targets="_blank"
              aria-label="facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              targets="_blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
