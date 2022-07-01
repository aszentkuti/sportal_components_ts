import { useState } from "react";
import { addAbortSignal } from "stream";

export const useAlignment = (asd) => {
  const [alignment, setAlignment] = useState(getAlignment(asd));

  const getAlignment = (alignment) => {
    console.log("run");
    switch (alignment) {
      case "right":
        setAlignment("xl:col-[2]");
        break;
      case "full":
        setAlignment("xl:col-span-full");
        break;
      default:
        setAlignment("xl:col-[1]");
        break;
    }
  };
  return alignment;
};
