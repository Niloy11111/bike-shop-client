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

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  // console.log(user);

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "   text-sm rounded-full   transition-all duration-200 text-[#ff3811b3]  font-Inter rounded  font-semibold  "
              : "text-sm rounded-full  transition-all duration-200 hover:text-[#ff3811b3]   font-Inter rounded  font-semibold "
          }
        >
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/all-products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "   text-sm rounded-full   transition-all duration-200 text-[#ff3811b3]  font-Inter rounded  font-semibold  "
              : "text-sm rounded-full  transition-all duration-200 hover:text-[#ff3811b3]   font-Inter rounded  font-semibold "
          }
        >
          All Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "   text-sm rounded-full   transition-all duration-200 text-[#ff3811b3]  font-Inter rounded  font-semibold  "
              : "text-sm rounded-full  transition-all duration-200 hover:text-[#ff3811b3]   font-Inter rounded  font-semibold "
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className=" bg-p1">
        <div className="customWidth text-sm flex justify-between  text-white h-[40px]    ">
          <div className="md:flex gap-5  items-center   hidden ">
            <p className=" lg:flex items-center gap-1  hidden ">
              <Phone className="w-[16px]" /> <span>+9 (681) 843-4596</span>
            </p>
            <p className=" lg:flex items-center gap-1 hidden ">
              <Mail className="w-[16px]" /> <span>info@rentmode.com</span>
            </p>
          </div>
          <div className="md:flex items-center   hidden ">
            <p className=" hidden lg:flex gap-1 items-center">
              {/* Discover your perfect rental apartment with our advanced search
               */}
              <SearchCheck className="w-[20px]" />{" "}
              <span>
                Find your ideal rental home quickly and easily with our powerful
                search tools.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          scrollY > 30
            ? "border-b border-b3 w-full fixed top-0 left-0  z-50  "
            : ""
        }  py-4  bg-white  `}
      >
        <div className="customWidth flex lg:flex-row flex-row-reverse  justify-between  items-center">
          <div className="flex  items-center gap-2">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" lg:hidden">
                <FaBars className="text-2xl text-p1"></FaBars>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow "
              >
                {navLinks}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-[50px] lg:w-[50px]"
                src="https://i.ibb.co.com/fY976K4r/Screenshot-2025-02-24-150936.png"
              ></img>
              <h2 className="text-xl hidden lg:block font-extrabold font-Inter">
                {" "}
                BikeBari
              </h2>
            </div>
          </div>

          <div className="lg:flex bg-blued-200 items-center hidden lg:block  py-3 px-12  rounded-full border border-[#D9D9D9]">
            <ul className=" lg:flex gap-12">{navLinks}</ul>
          </div>

          <div className="">
            {user ? (
              <div className="dropdown  lg:block dropdown-end">
                <div className="flex gap-3 items-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost  btn-circle avatar"
                  >
                    <div className="w-[40px] rounded-full text-white">
                      <img src={user?.img} alt={user?.name} />
                    </div>
                  </label>
                  <div>
                    <button
                      onClick={handleLogout}
                      className="text-sm flex items-center gap-1 font-Inter font-semibold  text-p1"
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
                      ? "text-sm bg-p1 text-white font-Inter rounded-full  font-semibold py-3 px-6"
                      : " text-sm hover:bg-p1/80 bg-p1 text-white  font-Inter rounded-full  font-semibold py-3 px-6"
                  }
                >
                  Log in
                </NavLink>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
