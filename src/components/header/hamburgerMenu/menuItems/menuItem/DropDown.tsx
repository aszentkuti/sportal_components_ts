import React from "react";

interface IDropdownProps {
  show: boolean;
  items: {
    url?: string;
    text?: string;
    image?: string;
  }[];
}
function DropDown({ show, items }: IDropdownProps) {
  return (
    <ul className={`flex flex-col gap-1 pl-3 pb-3 ${!show && "hidden"}`}>
      {items.map((item, index) => (
        <li key={`dropdown-item-${index}`} className="text-left">
          <a
            key={`header-dropdown-item-${index}`}
            className="font-semibold text-lg dark:hover:text-brand-red hover:text-brand-red transition-color duration-200"
            href={item.url}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
