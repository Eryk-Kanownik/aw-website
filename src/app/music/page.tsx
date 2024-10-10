import DiscCard from "@/components/cards/DiscCard";
import React from "react";

const page = () => {
  return (
    <div className="px-6 pt-24 lg:px-12 lg:pt-36 min-h-screen">
      <h1 className="mb-4 font-bold text-2xl">Dyskografia</h1>
      <div className="flex gap-4 overflow-x-auto py-4">
        <DiscCard type="Album" />
        <DiscCard type="Album" />
      </div>
    </div>
  );
};

export default page;
