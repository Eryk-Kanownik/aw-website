import React from "react";
import Image from "next/image";
import image from "../../../public/cover.png";

const page = () => {
  return (
    <div className=" px-6 pt-24 lg:px-12 lg:pt-36 min-h-screen flex justify-center">
      <div className="w-[50%] ">
        <h1 className="mb-4 font-bold text-2xl ">O nas</h1>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <Image
            src={image}
            width="200"
            height="200"
            alt="disc"
            className="aspect-square bg-black w-[100%] object-cover"
          />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            debitis reprehenderit? Laudantium hic, deserunt cumque nihil
            veritatis laboriosam delectus fugit perferendis accusamus
            voluptatum. Quo sed hic officiis natus odit atque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laudantium, earum nobis porro
            minima deleniti atque similique enim beatae a. Facere atque non
            delectus expedita, necessitatibus est facilis soluta at beatae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatibus.
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          consequatur obcaecati odio autem omnis minima a repellat inventore
          officiis! Magnam, amet! Labore cumque ullam, velit facere est esse
          earum dolorum.
        </div>
      </div>
    </div>
  );
};

export default page;
