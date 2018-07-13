import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header sticky">
      <div className="screenSize">
        <div className="">
          <Link
            to={{
              pathname: "/menus"
            }}
          >
            <img
              src="./Deliveroo_logo.svg.png"
              alt="deliveroo_logo"
              height="50px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
