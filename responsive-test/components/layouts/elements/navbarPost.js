import React from "react";
import Link from "next/link";

function navbarPost() {
  return (
    <div>
      <div className="navbar bg-blue-600  mb-5 shadow-xl ">
        <div className="navbar-start">
            <Link href={`/posts`}>
          <label className="btn btn-ghost btn-circle text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              />
            </svg>
          </label>
          </Link>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl text-white">Report</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown text-white">
            <label className="btn btn-ghost btn-circle">
             <b>. . .</b>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbarPost;
