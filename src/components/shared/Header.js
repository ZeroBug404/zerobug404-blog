import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-36 mb-5 mt-10 rounded-full border-2 border-blue-200">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-10 text-slate-900">
        <BsGithub />
        <BsLinkedin />
        <ImFacebook2 />
      </div>

      <div class="relative border-y mt-10">
        <nav class="container mx-auto">
          <div class="max-w-4xl h-12 nd:h-16 mx-auto flex justify-between align-stretch px-4">
            <div id="logo" class="flex items-center text-blue-600 font-bold">
              <a href="/">ZeroBug</a>
            </div>
            <ul
              id="nav-links"
              class="hidden md:block absolute md:relative md:flex md:align-stretch md:justify-end right-0 top-0 mt-10 md:mt-0 py-2 md:py-0 w-48 md:w-auto h-auto z-10 bg-white shadow md:shadow-none"
            >
              <li>
                <a
                  class="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  className="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  class="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div class="md:hidden flex items-center">
              <button
                id="menu-button"
                class="p-1 rounded-full focus:outline-none"
              >
                <svg
                  class="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="menu-icon"
                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
