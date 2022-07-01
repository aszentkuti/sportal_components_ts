import React, { useEffect, useState } from "react";
import MoonIcon from "../../../icons/MoonIcon";
import SunIcon from "../../../icons/SunIcon";

function DarkModeSwitch() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const colorScheme = localStorage.getItem("color-scheme");
    if (colorScheme === "dark") {
      setIsLightMode(false);
    }
  }, []);

  useEffect(() => {
    if (!isLightMode) {
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("color-scheme", "dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("color-scheme", "light");
    }
  }, [isLightMode]);

  return (
    <button
      onClick={() => setIsLightMode(!isLightMode)}
      className="px-3 hover:bg-brand-red transition-colors duration-300 mr-3 ml-auto xl:ml-0"
    >
      {isLightMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default DarkModeSwitch;
