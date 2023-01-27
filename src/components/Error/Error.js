import './Error.scss';
import * as d3 from "d3";

import React from "react";
import './Error.scss'

function Error() {

  return (
    <div className="Error">
      <header className="Error-header">

        <img src='https://github.com/BrianKendalBucek/budgie/blob/main/assets/404budgie-icon.png?raw=true' className="budgie-error-logo" alt="Budgie error logo" />
        <div class ="error-title">
          <h1>Error</h1>
          <p>Something went wrong, try again.</p>    
          
        </div>
      </header>

    </div>
  );
}

export default Error;