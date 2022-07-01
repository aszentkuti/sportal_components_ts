import React from "react";

interface ILiveEventProps {
  title: string;
  url: string;
}

function LiveEvent({ url, title } : ILiveEventProps) {
  return (
    <a
      href={url}
      className="bg-gradient-to-r from-brand-red to-brand-orange flex gap-3 items-center px-3 py-2 rounded-md "
    >
      <div className="relative">
        <span className="absolute animate-ping block w-3 h-3 bg-lime-500 rounded-full"></span>
        <span className="block w-3 h-3 bg-lime-500 rounded-full"></span>
      </div>
      <span className="font-bold uppercase text-white text-lg tracking-wide">
        {title}
      </span>
    </a>
  );
}

export default LiveEvent;
