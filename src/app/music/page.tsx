import DiscCard from "@/components/cards/DiscCard";
import React from "react";

const page = () => {
  return (
    <div className=" pt-28 px-6 lg:px-12">
      <h1 className="mb-4 font-bold text-2xl">Dyskografia</h1>
      <div className="flex gap-4 overflow-x-scroll">
        <DiscCard type="Album" />
        <DiscCard type="Album" />
        <DiscCard type="Album" />
        <DiscCard type="Album" />
        <DiscCard type="Album" />
      </div>
    </div>
  );
};

export default page;
