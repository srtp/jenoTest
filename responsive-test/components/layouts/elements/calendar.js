import React from "react";
import Link from "next/link";
function calendar() {
  return (
    <div className="navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <div className="tabs w-full">
          <a className="tab tab-bordered">Daily</a>
          <a className="tab tab-bordered tab-active">Weekly</a>
          <a className="tab tab-bordered">Monthly</a>
        </div>
      </div>
      <div className="navbar-end">
        <Link href="/posts">
          <button>
            {" "}
            <svg
              style={{ marginRight: 40 }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgba(197, 197, 197, 0.90)"
                d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
              />
            </svg>
          </button>
        </Link>
      </div>

      <br />
      <br />
    </div>
  );
}

export default calendar;
