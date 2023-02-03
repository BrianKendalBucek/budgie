import React, { useState, useContext, createContext } from "react";
import { authProvider } from "../userAuth/authAPI";
import axios from "axios";

export const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signIn = async (email, password, cb) => {
    // console.log(email, password);
    // return authProvider.signIn(email, password, () => {});
    //async call to API to auth
    // setUser(email);
    // console.log("hi from context");
    // run the navigate hook in the login component
    try {
      const isAuth = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        {
          withCredentials: true,
          // headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (isAuth.data.validated) {
        // navigate("/stats");
        setUser(() => email);
        cb();
        return isAuth.data;
      } else {
        // setError({ active: true, msg: isAuth.data.msg });
        return isAuth.data;
      }
    } catch (error) {
      console.log(error);
      return error.response.data;
      // setError({
      //   active: true,
      //   msg: error.response.data.msg,
      // });
      // cb();
    }
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
