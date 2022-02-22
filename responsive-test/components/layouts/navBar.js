import React from "react";
import Calendar from "./elements/calendar";
import Tab from "./elements/tab";
import Link from "next/link";

function navBar() {
  return (
    <div>
      <div className="navbar bg-blue-600  mb-5 shadow-xl ">
        <div className="navbar-start">
          <Link href={`/`}>
            <label className="btn btn-ghost btn-circle text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"
                />
              </svg>
            </label>
          </Link>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl text-white">Home</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown text-white">
            <label className="btn btn-ghost btn-circle">
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100  w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Calendar />
      <Tab />
    </div>
  );
}

export default navBar;
