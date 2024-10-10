import React from "react";

interface IConcertCard {
  date: string;
  place: string;
}

const ConcertCard: React.FC<IConcertCard> = ({ date, place }) => {
  const past = (date: string) => {
    let d = new Date(date);
    let current = new Date();
    return d < current ? true : false;
  };

  return (
    <div
      className={`flex justify-between border-b-[1px] items-center relative p-2`}>
      <p className="text-sm">{date}</p>
      <p className="font-semibold">{place}</p>
      <button className="border-[1px] px-2 py-1 rounded-md">Bilety</button>
      <div
        className={`absolute h-2 bg-cyan-500 shadow-md duration-200 rounded-md ${
          past(date) === true && "w-[100%]"
        }`}></div>
    </div>
  );
};

export default ConcertCard;
