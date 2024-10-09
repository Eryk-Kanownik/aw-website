import DiscCard from "@/components/cards/DiscCard";
import React from "react";

const page = () => {
  return (
    <div className=" pt-28 px-12">
      <h1 className="mb-4 font-bold text-2xl">Dyskografia</h1>
      <div className="flex gap-4 overflow-x-auto">
        <DiscCard />
        <DiscCard />
        <DiscCard />
        <DiscCard />
        <DiscCard />
      </div>
    </div>
  );
};

export default page;
