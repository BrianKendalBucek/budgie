import React, { useState, useContext, createContext } from "react";
import { authProvider } from "../userAuth/auth";

export const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signin = (userLogin, cb) => {
    return authProvider.signin(() => {
      setUser(userLogin);
      cb();
    });
  };

  const logout = (cb) => {
    return authProvider.logout(() => {
      setUser(null);
      cb();
    });
  };

  const value = { user, signin, logout };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
