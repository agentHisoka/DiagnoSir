import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";
const CTA = () => (
  <div className="diag__cta">
    <div className="diag__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Take control of your health journey, sign in to Self Diagnosis.</h3>
    </div>
    <div className="diag__cta-btn">
      <Link to="/login">
        <button type="button">Get Started</button>
      </Link>
    </div>
  </div>
);
export default CTA;
