import { Mail, Phone, SearchCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 150); // 150ms delay
    setHideTimeout(timeout);
  };

  const navLinks = (
    <>
      <li className="relative">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer"
        >
          <NavLink to="/" className="inActiveNav">
            Featured
          </NavLink>
        </div>
      </li>

      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/all-products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          All Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          About
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return (
    <nav>
      <div className="bg-p1">
        <div className="customWidth text-sm flex justify-between text-white h-[40px]">
          <div className="md:flex gap-5 items-center hidden">
            <p className="lg:flex items-center gap-1 hidden">
              <Phone className="w-[16px]" /> <span>+9 (681) 843-4596</span>
            </p>
            <p className="lg:flex items-center gap-1 hidden">
              <Mail className="w-[16px]" /> <span>info@bikebari.com</span>
            </p>
          </div>
          <div className="md:flex items-center hidden">
            <p className="hidden lg:flex gap-1 items-center">
              <SearchCheck className="w-[20px]" />
              <span>
                Shop your dream bike quickly and easily with our smart filtering
                tools.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          scrollY > 30 ? "border w-full fixed top-0 left-0 z-50" : ""
        } py-4 border-b3 bg-white`}
      >
        <div className="customWidth flex lg:flex-row flex-row-reverse justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
                <FaBars className="text-2xl text-p1"></FaBars>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-[50px] lg:w-[50px]"
                src="https://i.ibb.co.com/fY976K4r/Screenshot-2025-02-24-150936.png"
                alt="BikeBari Logo"
              />
              <h2 className="text-xl hidden lg:block font-extrabold font-Inter">
                BikeBari
              </h2>
            </div>
          </div>

          <div
            className={`${
              scrollY > 30 ? "border-none" : "border"
            } border-[#D9D9D9] lg:flex bg-blued-200 items-center hidden py-3 px-12 rounded-full`}
          >
            <ul className="lg:flex gap-12">{navLinks}</ul>
          </div>

          <div className="">
            {user ? (
              <div className="dropdown lg:block dropdown-end">
                <div className="flex gap-3 items-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-[40px] rounded-full text-white">
                      <img src={user?.img} alt={user?.name} />
                    </div>
                  </label>
                  <div>
                    <button
                      onClick={handleLogout}
                      className="text-sm flex items-center gap-1 font-Inter font-semibold text-p1"
                    >
                      Logout{" "}
                      <HiOutlineLogout className="text-xl"></HiOutlineLogout>
                    </button>
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user?.name}</a>
                  </li>
                  <li>
                    <Link
                      to={`/${user.role}/overview-dashboard`}
                      className="justify-between"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="mt-1">
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-sm bg-p1 text-white font-Inter rounded-full font-semibold py-3 px-6"
                      : "text-sm hover:bg-p1/80 bg-p1 text-white font-Inter rounded-full font-semibold py-3 px-6"
                  }
                >
                  Log in
                </NavLink>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {show && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${
            scrollY > 30 ? "top-[70px]" : "top-[110px]"
          } fixed left-0 bg-[#ededee] z-40 h-[70vh] w-full border-b-5 border-secondary-600 transition-all duration-300`}
        >
          <div className="flex mt-7 justify-center gap-8">
            <div>
              <h1 className="megaMenuTitle">Shop Bikes</h1>
              <ul className="megaMenuList text-lg font-bold">
                <li>Mountain Bikes</li>
                <li>Road Bikes</li>
                <li>Electric Commuter Bikes</li>
                <li>Kids' Balance Bikes</li>
                <li>Gravel Touring Bikes</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Accessories</h1>
              <ul className="megaMenuList">
                <li>Protective Helmets</li>
                <li>Rechargeable Bike Lights</li>
                <li>High-Security Locks</li>
                <li>Portable Bike Pumps</li>
                <li>Insulated Water Bottles</li>
                <li>Waterproof Bike Bags</li>
                <li>Handlebar Phone Mounts</li>
                <li>Comfort Pedals and Saddles</li>
                <li>Compact Repair Kits</li>
                <li>GPS Navigation Devices</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Services</h1>
              <ul className="megaMenuList">
                <li>Professional Bike Repairs</li>
                <li>Custom Bike Fitting Services</li>
                <li>Complete Custom Builds</li>
                <li>Bike Trade-In Program</li>
                <li>Annual Maintenance Plans</li>
                <li>Workshop Training Events</li>
                <li>Home Bike Assembly Service</li>
                <li>Local Delivery Services</li>
              </ul>
            </div>
            <div>
              <h1 className="megaMenuTitle">Explore</h1>
              <ul className="megaMenuList">
                <li>New Arrivals Collection</li>
                <li>Best Selling Bikes</li>
                <li>Seasonal Sale & Offers</li>
                <li>Digital Gift Cards</li>
                <li>Beginner Riding Guides</li>
                <li>Customer Experience Reviews</li>
                <li>Bike Size & Fit Guide</li>
                <li>Bike Adventure Blog</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
