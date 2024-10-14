import DiscCard from "@/components/cards/DiscCard";
import React from "react";
import albums from "../../../public/albums/albums.json";

const page = () => {
  return (
    <div className="px-6 pt-24 lg:px-12 lg:pt-36 min-h-screen">
      <h1 className="mb-4 font-bold text-2xl">Dyskografia</h1>
      <div className="flex gap-4 overflow-x-auto py-4">
        {albums.map(({ coverSrc, type, name, anchors }, key: React.Key) => (
          <DiscCard
            key={key}
            coverSrc={coverSrc}
            type={type}
            name={name}
            anchors={anchors}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
