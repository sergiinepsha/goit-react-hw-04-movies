import React from "react";

import routes from "../../routes";
import { NavListCSS, NavItemCSS, NavItemLinkCSS } from "./styledNavigation";

export default function Navigation() {
  return (
    <NavListCSS>
      <NavItemCSS>
        <NavItemLinkCSS to={routes.home}>Home</NavItemLinkCSS>
      </NavItemCSS>
      <NavItemCSS>
        <NavItemLinkCSS to={routes.moviesPage}>Movies</NavItemLinkCSS>
      </NavItemCSS>
    </NavListCSS>
  );
}
