import axios from "axios";

const authProvider = {
  isAuthenticated: false,
  async signIn(email, password, cb) {
    console.log("hi from sign in", email, password);
    const res = await axios.post(
      "http://localhost:3002/login",
      { email, password },
      { withCredentials: true }
    );
    console.log(res.data);
    // return res.data;
    cb(res.data);
  },

  logout(cb) {},
};

export { authProvider };
