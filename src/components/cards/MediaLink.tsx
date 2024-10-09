import Link from "next/link";
import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

interface IMediaLink {
  type: string;
  url: string;
}

const MediaLink: React.FC<IMediaLink> = ({ type, url }) => {
  const icon = (type: string) => {
    switch (type) {
      case "Spotify":
        return <FaSpotify />;
      case "Youtube":
        return <FaYoutube />;
    }
    return;
  };

  return (
    <Link
      href={url}
      className="flex justify-center items-center border-[1px] gap-2 px-2 py-1 rounded-md hover:bg-cyan-500 hover:text-white">
      <span className="text-sm font-semibold">{type}</span>
      <span>{icon(type)}</span>
    </Link>
  );
};

export default MediaLink;
