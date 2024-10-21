import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category, setCategory}) => {
  console.log(category)
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from our wide range of food items and order them online from your
        home or office. We deliver to your doorstep.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={index}>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
