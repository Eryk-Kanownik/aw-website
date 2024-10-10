import React from "react";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6 lg:p-12 flex justify-between border-t-[1px]">
      <div className="font-bold">© 2024 KSH Label</div>
      <div className="flex gap-2">
        <FaSpotify size={30} />
        <FaInstagram size={30} />
        <FaYoutube size={30} />
      </div>
    </div>
  );
};

export default Footer;
