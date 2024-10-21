import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"
const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from our wide range of food items and order them online from your home or office. We deliver to your doorstep. Easy to order and pay online at any time. Choose from our wide range of food items and order them online from your home or office.</p>
      <div className="explore-menu-list"></div>
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
    </div>
  )
}

export default ExploreMenu
