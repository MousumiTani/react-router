import React from "react";
import logoImage from "../../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="m-2 text-base font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="m-2 text-base font-medium">
        <Link to="/apps">Apps</Link>
      </li>

      <li className="m-2 text-base font-medium">
        <Link to="/installation">Installation</Link>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <section className="btn btn-ghost">
          <img src={logoImage} alt="" className="w-8 h-8 " />
          <a className="text-xl font-bold">SelfRise</a>
        </section>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() =>
            window.open("https://github.com/MousumiTani?tab=repositories")
          }
          className="btn bg-[#9F62F2] text-white hover:bg-gray-500 text-base font-semibold"
        >
          <VscGithub />
          <span>Contribute</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
