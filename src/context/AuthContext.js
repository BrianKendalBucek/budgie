import React, { useState, useContext, createContext } from "react";
import { authProvider } from "../userAuth/authAPI";

export const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = (email, password, cb) => {
    // console.log(email, password);
    return authProvider.signIn(email, password, () => {
      //async call to API to auth
      console.log("hi from context");
      // setUser(email);
      // run the navigate hook in the login component
      cb();
    });
  };

  const logout = (cb) => {
    return authProvider.logout(() => {
      setUser(null);
      cb();
    });
  };

  const value = { user, signIn, logout };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
