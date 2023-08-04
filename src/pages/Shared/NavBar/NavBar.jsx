import { Link } from "react-router-dom";
import {  FaPhone, FaShoppingCart} from 'react-icons/fa';
import { RiAdminLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import {  MdOutlineKeyboardArrowDown } from "react-icons/md";



const NavBar = () => {
  const navOptions = <>
    <li className="font-bold"><Link to="">  Categories <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></Link></li>
    <li className="font-bold"><Link to="">Deals</Link></li>
    <li className="font-bold"><Link to="">What is New</Link></li>
    <li className="font-bold"><Link to="">Delivery</Link></li>
    <input type="text" placeholder="Search Product " className="input input-bordered w-24 md:w-auto"  />
    <li className="font-bold"><Link to=""><RiAdminLine></RiAdminLine> Account</Link></li>
    <li className="font-bold"><Link to=""><FaShoppingCart></FaShoppingCart> Cart</Link></li>

  </>
  return (
    <div>
      <div className="md:flex justify-between bg-green-900 px-4 py-2 text-white">
        <div className="md:flex">
        <FaPhone></FaPhone>
        <p> +00123456789 </p>
        </div>
        
        <p>Get 50% Off On Selected Items | Shop Now</p>
        <div className="md:flex">
        <p>Eng </p>
        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        <p>Location </p>
        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

        </div>
        
        

      </div>
      {/*Navbar  */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><CiShoppingCart></CiShoppingCart>  Shopcart</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

      </div>

    </div>


  );
};

export default NavBar;