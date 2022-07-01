import React from "react";
import HeaderDecorElem from "../../../images/HeaderDecorElem";
import sportalLogoDesktop from "../../../images/sportalLogoDesktop.svg";
import sportalLogoMobile from "../../../images/sportalLogoMobile.svg";

function Logo() {
  return (
    <div className="flex h-full relative">
      <a
        className="bg-gradient-to-r from-[#eb003c] to-[#f1202b] flex grow h-full self-center xl:w-full align-center xl:max-w-[264px] w-[124px] z-40 -mr-4 xl:-mr-1 pl-3 items-center"
        href="/"
      >
        <picture>
          <source
            srcSet={sportalLogoMobile}
            media="(max-width: 1279px)"
          />
          <img
            src={sportalLogoDesktop}
            alt="sportal logo"
          />
        </picture>
      </a>
      <HeaderDecorElem/>
    </div>
  );
}

export default Logo;
