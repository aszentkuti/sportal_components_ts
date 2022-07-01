import React, { useState } from "react";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import MenuItems from "./menuItems/MenuItems";
import LiveEvent from "./sidebar/LiveEvent";
import Sidebar from "./sidebar/Sidebar";

interface ITag {
  text?: string;
  url?: string;
}

interface IHamburgerMenuProps {
  items?: any;
  tags?: ITag[];
}

function HamburgerMenu({ items, tags }: IHamburgerMenuProps) {
  const [isSideBarVisible, setSideBarVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setSideBarVisible(true)}
        className="text-white font-medium px-3 hover:bg-brand-red transition-colors duration-300 uppercase"
      >
        <div className="flex gap-2">
          <HamburgerIcon />
          <span>Menu</span>
        </div>
      </button>
      <Sidebar
        isSideBarVisible={isSideBarVisible}
        setSideBarVisible={setSideBarVisible}
      >
        <LiveEvent url={"/"} title={"Livescores"} />
        <MenuItems items={items} />
        {tags && (
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag: ITag, index: number) => (
              <a
                key={`header-tag-${index}`}
                className="uppercase text-brand-red hover:underline underline-offset-4 text-md"
                href={tag.url}
              >
                {tag.text}
              </a>
            ))}
          </div>
        )}
      </Sidebar>
    </>
  );
}

export default HamburgerMenu;
