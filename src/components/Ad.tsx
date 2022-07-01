import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { getAlignmentClassName } from "../util/alignment";

interface IAdProps {
  alignment?: "left" | "full" | "right";
  rowStart?: string;
  rowEnd?: string;
  sticky?: boolean;
}

function Ad({
  rowStart = "auto",
  rowEnd = "auto",
  sticky = false,
  alignment = "right",
}: IAdProps) {
  //TODO: access tailwind config and retrieve the breakpoint from there (no idea how tho)
  const mediaMatch = useMediaQuery(`(min-width: 1280px)`);
  const alignmentClass = getAlignmentClassName(alignment);

  return (
    <div
      style={mediaMatch ? { gridRowStart: rowStart, gridRowEnd: rowEnd } : {}}
      className={`${alignmentClass} flex grow mb-5 justify-center`}
    >
      <div className={`${sticky ? "sticky" : ""} top-28 h-fit`}>
        <img
          src="https://tpc.googlesyndication.com/simgad/26245533821861355?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qn1vbfmw10mLMRzHKI6KwHLZVbIRA"
          alt=""
        />
      </div>
    </div>
  );
}

export default Ad;
