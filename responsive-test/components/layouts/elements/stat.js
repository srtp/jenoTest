import React from "react";

function stat() {
  return (
    <div>
      <div className=" border border-slate-200 grid grid-cols-2">
        <div className="stat">
          <div className="stat-title text-blue-600 text-center">Like</div>
          <div className="stat-value text-gray-900 text-center">89,400</div>
          <div className="stat-desc text-center">Likes</div>
        </div>
        <div className="stat">
          <div className="stat-title text-blue-600 text-center">Comment</div>
          <div className="stat-value text-gray-900 text-center">89,400</div>
          <div className="stat-desc text-center">Comments</div>
        </div>
      </div>
      <div className=" border border-slate-200 grid grid-cols-2">
        <div className="stat">
          <div className="stat-title text-blue-600 text-center">Point</div>
          <div className="stat-value text-gray-900 text-center">89,400</div>
          <div className="stat-desc text-center">Point</div>
        </div>
        <div className="stat">
          <div className="stat-title text-blue-600 text-center">Diamond</div>
          <div className="stat-value text-gray-900 text-center">89,400</div>
          <div className="stat-desc text-center">Diamond</div>
        </div>
      </div>
    </div>
  );
}

export default stat;
