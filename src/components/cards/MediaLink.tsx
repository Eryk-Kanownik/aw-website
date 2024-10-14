import Link from "next/link";
import React from "react";
import { FaAmazon, FaSpotify, FaYoutube } from "react-icons/fa";

interface IMediaLink {
  platform: string;
  url: string;
}

const MediaLink: React.FC<IMediaLink> = ({ platform, url }) => {
  const icon = (platform: string) => {
    switch (platform) {
      case "Spotify":
        return <FaSpotify />;
      case "Youtube":
        return <FaYoutube />;
      case "Amazon Music":
        return <FaAmazon />;
    }
    return;
  };

  return (
    <Link
      href={url}
      className="flex justify-center items-center border-[1px] gap-2 px-2 py-1 rounded-md hover:bg-cyan-500 hover:text-white">
      <span className="text-sm font-semibold">{platform}</span>
      <span>{icon(platform)}</span>
    </Link>
  );
};

export default MediaLink;
