import React from "react";
import Logo from "assets/budgie-icon.png";
import Statistics from './Statistics';

// ?How to pass in title of page with props

const Header = () => {
  return (
    <nav>
      <div className="div-header">
        <div className="div-png">
          <button to='/'><Statistics className="header-title" /></button>
          <img src={Logo} alt='Budgie logo' />
        </div>
        <div>
          <p>Title of Page</p>
        </div>
      </div>
    </nav>
  )
}

export default Header;

// BELOW IS EXAMPLE CODE TO CONNECT HEADER TO EVERY PAGE

// const Home = () => {
//   return(
//     <div>
//       <Header/>
//     </div>
//   )
// }

// export default Home;