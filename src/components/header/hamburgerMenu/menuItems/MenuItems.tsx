import React from "react";
import MenuItem from "./menuItem/MenuItem";

interface IMenuItemProps {
  items: {
    text?: string;
    children?: {
      url?: string;
      text?: string;
      image?: string;
    }[];
    url?: string;
    special?: boolean;
  }[];
}
function MenuItems({ items }: IMenuItemProps) {
  return (
    <ul className="flex flex-col divide-y">
      {items.map((item, index) => (
        <MenuItem key={`sidebar-item-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
