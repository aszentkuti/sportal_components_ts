import React from "react";
import SubMenuItem from "./subMenuItem/SubMenuItem";

function SubMenuItems({ items }) {
  
  return (
    <div className="text-right whitespace-nowrap overflow-auto xl:overflow-hidden xl:max-w-[calc(100vw-330px)] max-w-[calc(100vw-180px)] after:dark:bg-dark text-xs after:bg-[#faf6f8] after:block after:w-full after:h-full after:-z-10 after:absolute after:top-0 after:-left-0 ml-auto w-full divide-x divide-[#a0656526] after:border-b after:border-[#a0656526] top-[42px] xl:top-[50px]">
      {items.map((item,index) => (
        <SubMenuItem key={`submenu-item-${index}`} item={item} />
      ))}
    </div>
  );
}

export default SubMenuItems;
