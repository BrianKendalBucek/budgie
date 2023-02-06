import axios from "axios";
/* 
Ideally this is where the logic for authentication would happen, it gave me trouble, figuring out how to use this as a callback from inside AuthContext
see here for the React Router example, although they are using a setTimeout instead of a API call
for Now i have moved all this logic up one level to be included inside authContext
https://stackblitz.com/edit/github-zola1x?file=src%2Fauth.ts,src%2FApp.tsx
*/

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
