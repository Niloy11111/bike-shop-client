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
              ? "   text-sm transition-all duration-200 bg-[#ff3811b3] text-white   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#ff3811b3]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
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
              ? "   text-sm transition-all duration-200 bg-[#ff3811b3] text-white  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#ff3811b3]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
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
              ? "   text-sm transition-all duration-200 bg-[#ff3811b3] text-white  font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4 "
              : "text-sm transition-all duration-200 hover:bg-[#ff3811b3]   font-Inter rounded  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className=" py-4 flex lg:flex-row flex-row-reverse  justify-between   ">
        <div className="flex  items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
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
            ></img>
            <h2 className="text-xl hidden lg:block font-extrabold font-Inter">
              {" "}
              BikeBari
            </h2>
          </div>
        </div>

        <div className="flex  items-center hidden lg:block    p-3 rounded">
          <ul className=" lg:flex gap-3 ">{navLinks}</ul>
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
                    ? "text-sm bg-p1 text-white font-Inter rounded  font-semibold py-2 px-4"
                    : " text-sm hover:bg-p1 bg-p1 text-white  font-Inter rounded  font-semibold py-2 px-4"
                }
              >
                Log in
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
