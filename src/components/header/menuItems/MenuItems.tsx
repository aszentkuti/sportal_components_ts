import React from "react";
import MenuItem from "./menuItem/MenuItem";

interface IGenericDropDown extends IItem {
  title?: string;
  items?: IItem[];
}

interface IItem {
  text?: string;
  url?: string;
  image?: string;
  withTables?: boolean;
}

interface IMenuItemsProps {
  items: {
    text?: string;
    url?: string;
    children?: IGenericDropDown[];
    special?: boolean;
  }[];
}

function MenuItems({ items }: IMenuItemsProps) {
  return (
    <div className="ml-auto hidden xl:flex">
      {items.map((item: IGenericDropDown, index: number) => (
        <MenuItem key={`headermenu-item-${index}`} item={item} />
      ))}
    </div>
  );
}

export default MenuItems;
