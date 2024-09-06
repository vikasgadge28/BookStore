import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeNav = "bg-blue-500 text-white hover:bg-blue-500  ";
    const normalNav = "hover:bg-blue-500  hover:text-white duration-400";

    const navList = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeNav : normalNav)}
          ><a>Home</a>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/course"
            className={({ isActive }) => (isActive ? activeNav : normalNav)}
          ><a>Course</a>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeNav : normalNav)}
          ><a>Contact</a>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeNav : normalNav)}
          ><a>About</a>
          </NavLink>
        </li>
      </>
    );


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-5 px-4 fixed top-0 left-0 bg-white z-50">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className=" hidden lg:block ">
              <ul className="menu menu-horizontal py-1 text-base font-medium space-x-1">
                {navList}
              </ul>
            </div>

            {/* Responsive-Navbar*/}

            <div className="dropdown block lg:hidden ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 font-medium"
              >
                {navList}
              </ul>
            </div>
          </div>

          <div className="navbar-center">
            <a className="font-semibold text-2xl">
              Book<span className="text-blue-500">Store</span>
            </a>
          </div>

          <div className="navbar-end space-x-4">
            <div className=" hidden md:block ">
              <label className="px-3 py-2 border rounded-lg flex items-center gap-2 lg:py-1">
                <input
                  type="text"
                  className="grow outline-none hidden lg:block"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <button className=" bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar