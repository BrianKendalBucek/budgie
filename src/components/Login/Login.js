import React from "react";
import './Login.scss';

export function Login (){

  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

}

// reference site
// https://contactmentor.com/login-form-react-js-code/