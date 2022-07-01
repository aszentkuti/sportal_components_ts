import React, { useState } from "react";
import ArrowDownIcon from "../../../../../icons/ArrowDownIcon";
import DropDown from "./DropDown";
import SpecialDropDown from "./SpecialDropDown";

interface IMenuItemProps {
  item: {
    text?: string;
    children?: {
      url?: string;
      text?: string;
      image?: string;
    }[];
    url?: string;
    special?: boolean;
  };
}

function MenuItem({ item }: IMenuItemProps) {
  const [showChildren, setShowChildren] = useState(item.special === true);

  return (
    <li>
      <div className="flex w-full items-center cursor-pointer py-1 text-left">
        <a
          className="uppercase whitespace-nowrap font-bold text-2xl text-brand-red hover:underline"
          href={item.url}
        >
          {item.text}
        </a>
        {item.children && (
          <button
            onClick={() => setShowChildren(!showChildren)}
            className="flex justify-end w-full"
          >
            <div
              className={
                "transition-transform " +
                (showChildren ? "rotate-180" : "rotate-0")
              }
            >
              <ArrowDownIcon stroke="currentColor" />
            </div>
          </button>
        )}
      </div>
      {item.children &&
        (item.special ? (
          <SpecialDropDown show={showChildren} items={item.children} />
        ) : (
          <DropDown show={showChildren} items={item.children} />
        ))}
    </li>
  );
}

export default MenuItem;
