import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

function Welcome() {

  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <Link to="/login">
          <img
            src="https://github.com/BrianKendalBucek/budgie/blob/main/assets/budgie-icon.png?raw=true"
            className="budgie-logo"
            alt="Budgie logo"
          />
        </Link>
        <div className="welcome-title">
          <Link to="/login">
            <h1>Budgie</h1>
            <p>Let's fly!</p>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Welcome;
