import axios from "axios";

const authProvider = {
  isAuthenticated: false,
  async signIn(email, password, cb) {
    try {
      console.log("hi from sign in", email, password);
      return await axios
        .post(
          "http://localhost:3002/login",
          { email, password },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .then(() => cb());
      // console.log(res.data);
      // return res.data;
      // return res cb(res.data);
    } catch (error) {
      console.log(error);
    }
  },

  logout(cb) {},
};

export { authProvider };
