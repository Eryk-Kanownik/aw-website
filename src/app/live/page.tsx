import ConcertCard from "@/components/cards/ConcertCard";
import React from "react";
import concerts from "../../../public/concerts/concerts.json";

const page = () => {
  return (
    <div className="px-6 py-24 lg:px-12 lg:py-36 min-h-screen flex items-center justify-center flex-col ">
      <div className="z-10  p-4 bg-black text-white">
        <h1 className="mb-4 font-bold text-2xl text-center">
          Zbliżające się koncerty
        </h1>
        <div className="w-96 text-white">
          {concerts.map(({ date, place }, key: React.Key) => (
            <ConcertCard key={key} date={date} place={place} />
          ))}
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 right-0 bottom-0 object-cover h-full w-full">
        <source src="./concert_page_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default page;
