import React from "react";
import Link from "next/link";
function tab() {
  return (
    <div>
      <div className="flex w-full tabs">
        <a className="grid h-10 flex-grow place-items-center tab tab-bordered">
          Submisson
        </a>
        <a className="divider divider-horizontal"></a>
        <Link href="/">
          <a className="grid h-10 flex-grow place-items-center tab tab-bordered tab-active">
            Engagements
          </a>
        </Link>
      </div>
    </div>
  );
}

export default tab;
