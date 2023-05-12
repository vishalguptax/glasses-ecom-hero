import "./navbar.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TbShoppingBag } from "react-icons/tb";
import { BsBookmarkHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import userImg from "../../assets/avatar.jpg";
const Navbar = () => {
  return (
    <nav>
      <div className="navLeft">
        <img src={userImg} alt="" className="userImg" />

        <span className="navLogo">OPTIC</span>
      </div>
      <div className="navSearch">
        <input type="text" placeholder="Search Glasses" />
        <CiSearch />
      </div>
      <div className="navRight">
        <div className="navMenuIcon">
          <span>Menu</span>
          <HiOutlineMenuAlt4 />
        </div>
        <div className="shoppingIcons">
          <span className="whishListIcon">
            <BsBookmarkHeart />
          </span>
          <span className="cartIcon">
            <TbShoppingBag />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
