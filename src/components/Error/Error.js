import "./Error.scss";
import { Link } from "react-router-dom";

import React from "react";
import "./Error.scss";

function Error() {
  return (
    <div className="Error">
      <header className="Error-header">
        <Link to="/stats">
          <img
            src="https://github.com/BrianKendalBucek/budgie/blob/main/assets/404budgie-icon.png?raw=true"
            className="budgie-error-logo"
            alt="Budgie error logo"
          />
        </Link>
        <div className="error-title">
          <Link to="/stats">
            <h1>Error</h1>
            <p>Something went wrong, try again.</p>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Error;
