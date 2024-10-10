import { assets } from "../../assets/assets";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
