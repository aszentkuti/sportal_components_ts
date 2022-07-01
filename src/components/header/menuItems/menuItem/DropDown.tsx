import React from "react";
interface IItem {
  text?: string;
  url?: string;
}
interface IDropDownProps {
  items: IItem[];
  show: boolean;
}
function DropDown({ items, show }: IDropDownProps) {
  return (
    <>
      {show && (
        <div className="animate-fade-in absolute grid grid-cols-2 w-[300px] dark:bg-dark-accent bg-white shadow-md dark:shadow-dark-accent shadow-slate-300 bottom-0 left-0 translate-y-full z-20">
          {items.map((item: IItem, index: number) => (
            <a
              key={`header-dropdown-item${index}`}
              className="flex font-bold text-sm px-3 py-3 self-center hover:text-brand-red dark:hover:bg-[#ebe3e712] hover:bg-[#ebe3e7] transition-colors duration-300 uppercase"
              href={item.url}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default DropDown;
