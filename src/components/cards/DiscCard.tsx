"use client";
import React from "react";
import Image from "next/image";
import MediaLink from "./MediaLink";

interface IDiscCard {
  coverSrc: string;
  type: string;
  name: string;
  anchors: { platform: string; url: string }[];
}

const DiscCard: React.FC<IDiscCard> = ({ coverSrc, type, name, anchors }) => {
  return (
    <div className="max-w-[300px] bg-white">
      <Image
        src={coverSrc}
        width="200"
        height="200"
        alt="disc"
        className="aspect-square bg-black w-[300px] h-[300px] object-cover"
      />
      <div className="my-2">
        <p className=" text-sm font-semibold">{type}</p>
        <p className="font-bold bg-cyan-500 p-1 text-white">{name}</p>
        <div className="mt-2 flex gap-2 flex-wrap ">
          {anchors.map(({ platform, url }) => (
            <MediaLink platform={platform} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscCard;
