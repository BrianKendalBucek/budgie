import React, { useState, createContext } from "react";
import axios from "axios";

export const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = async (email, password, cb) => {
    try {
      const isAuth = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      if (isAuth.data.validated) {
        setUser(() => isAuth.data.user);
        cb();
        return isAuth.data;
      } else {
        return isAuth.data;
      }
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  };
  const logout = async (cb) => {
    try {
      const out = await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );
      if (out.data) {
        setUser(() => null);
        cb();
        return out.data;
      }
    } catch (error) {
      console.log(error);
      cb();
      return error.response.data;
    }
  };
  const auth = async (cb) => {
    if (!user) {
      try {
        const res = await axios.get("http://localhost:3002/auth", {
          withCredentials: true,
        });
        if (!res.data) {
          return;
        } else {
          setUser(() => res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const value = { user, signIn, logout, auth };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
