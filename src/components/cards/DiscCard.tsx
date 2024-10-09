import React from "react";
import Image from "next/image";
import MediaLink from "./MediaLink";

import image from "../../../public/cover.png";

interface IDiscCard {
  type: string;
}

const DiscCard: React.FC<IDiscCard> = ({ type }) => {
  return (
    <div className="min-w-[300px]">
      <Image
        src={image}
        width="200"
        height="200"
        alt="disc"
        className="aspect-square bg-black w-[300px] h-[300px] object-cover"
      />
      <div className="my-2">
        <p className=" text-sm font-semibold">{type}</p>
        <p className="font-bold bg-cyan-500 p-1 text-white">
          AW Beats - Rozjebie świat
        </p>
        <div className="mt-2 flex gap-2 flex-wrap">
          <MediaLink type="Spotify" url="" />
          <MediaLink type="Youtube" url="" />
          <MediaLink type="Youtube" url="" />
        </div>
      </div>
    </div>
  );
};

export default DiscCard;
