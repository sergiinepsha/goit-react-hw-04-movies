import React from "react";

import { FooterCSS, FooterTextCSS, FooterLinkCSS } from "./styledAppFooter";

export default function AppFooter() {
  return (
    <FooterCSS>
      <FooterTextCSS>
        Information is obtained via the RESTful API
        <FooterLinkCSS
          target="blank"
          href="https://www.themoviedb.org/documentation/api"
          rel="noopener noreferrer"
        >
          https://www.themoviedb.org/documentation/api
        </FooterLinkCSS>
      </FooterTextCSS>
    </FooterCSS>
  );
}
