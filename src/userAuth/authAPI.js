import axios from "axios";

const baseURL = process.env.BASE_URL;

const authProvider = {
  isAuthenticated: false,
  async signIn(email, password, cb) {
    console.log("hi from sign in");
    const res = await axios.post(
      `${baseURL}/login`,
      { email, password },
      { withCredentials: true }
    );
  },

  logout(cb) {},
};

export { authProvider };
