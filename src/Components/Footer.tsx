import React, { useState } from "react";
import Link from "next/link";
import { LinkInfo } from "../types";
import { NavLogo } from "./Navbar/NavLogo";
import SocialIcons from "./SocialIcons";
import { NavLink } from "./Navbar/NavLink";

export const Footer = () => {
  const [active, setActive] = useState("Shop");

  const links: LinkInfo[] = [
    { title: "shop", url: "/shop" },
    { title: "returns", url: "/returns" },
    { title: "about", url: "/about" },
    { title: "contact", url: "/contact" },
    { title: "create", url: "/admin/create-product" },
    { title: "all", url: "/admin/all-products" },
  ];

  return (
    <div className="footer-stitch border-dashed border-t-2 border-base-content mt-14 ">
      <div className="footer w-full p-1 bg-primary shadow-top flex flex-col ">
        <div className="footer-components flex flex-row flex-wrap lg:justify-between justify-center lg:m-5 w-full">
          <NavLogo />
          <ul className="nav-menu flex flex-row flex-wrap gap-7 m-7 justify-center items-center">
            {links.map((link, key) => (
              <NavLink url={link.url} label={link.title} key={key} />
            ))}
          </ul>
          <SocialIcons />
        </div>

        <div className="copyright w-full flex justify-center mb-5">
          <p className="text-white text-center">
            Foldy Friends Inc. 2024 - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
