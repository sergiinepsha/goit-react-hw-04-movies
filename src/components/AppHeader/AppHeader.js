import React from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import { AppHeaderCSS } from "./styledAppHeader";

export default function AppHeader() {
  return (
    <AppHeaderCSS>
      <Logo />
      <Navigation />
    </AppHeaderCSS>
  );
}
