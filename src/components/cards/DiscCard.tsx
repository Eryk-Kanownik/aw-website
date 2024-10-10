import React from "react";
import Image from "next/image";
import MediaLink from "./MediaLink";

import image from "../../../public/cover.png";
import Link from "next/link";

interface IDiscCard {
  type: string;
}

const DiscCard: React.FC<IDiscCard> = ({ type }) => {
  return (
    <Link
      href=""
      className="min-w-[300px] hover:scale-105 hover:ml-2 duration-200 bg-white">
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
        <div className="mt-2 flex gap-2 flex-wrap p-2">
          <MediaLink type="Spotify" url="" />
          <MediaLink type="Youtube" url="" />
          <MediaLink type="Youtube" url="" />
        </div>
      </div>
    </Link>
  );
};

export default DiscCard;
