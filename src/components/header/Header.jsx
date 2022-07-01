import React from "react";
import DarkModeSwitch from "./darkModeSwitch/DarkModeSwitch";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu.tsx";
import Logo from "./logo/Logo";
import MenuItems from "./menuItems/MenuItems";
import SubMenuItems from "./subMenuItems/SubMenuItems";

function Header({ headerData: { menuItems, subMenu, tags} }) {
  return (
    <header className="fixed w-full flex flex-col z-20">
      <div className="flex -mb-[22px]">
        <div className="h-16 xl:h-18 isolate">
          <Logo />
        </div>
        <div className="flex grow bg-gradient-to-r from-[#F5381C] to-[#ff6c00] max-h-[45px] xl:max-h-[51px] -ml-[1px] z-10">
          <MenuItems items={menuItems} />
          <DarkModeSwitch />
          <HamburgerMenu items={menuItems} tags={tags}/>
        </div>
      </div>
      <SubMenuItems items={subMenu} />
    </header>
  );
}

export default Header;
