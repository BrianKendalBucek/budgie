const baseURL = process.env.BASE_URL;

const authProvider = {
  isAuthenticated: false,
  signin(cb) {},

  logout(cb) {},
};

export { authProvider };
