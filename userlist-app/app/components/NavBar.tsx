import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
