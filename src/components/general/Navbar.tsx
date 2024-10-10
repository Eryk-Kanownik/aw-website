"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const path = usePathname();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const isDarkBackground = path !== "/" && path !== "/live" ? true : false;

  return (
    <div
      className={`flex gap-16 p-6 lg:px-12 lg:py-6 items-center fixed top-0 left-0 right-0 z-20 ${
        isDarkBackground && "bg-white border-b-[1px]"
      } `}>
      <Link href="/">
        <p className="font-bold italic text-4xl">
          A<span className="text-cyan-500">W</span>_
        </p>
      </Link>
      <ul className="hidden gap-8 lg:flex">
        <li>
          <Link
            href="/music"
            className={`font-semibold  ${
              !isDarkBackground
                ? "text-cyan-500 hover:text-cyan-600"
                : "hover:text-cyan-500"
            }`}>
            Muzyka
          </Link>
        </li>
        <li>
          <Link
            href="/live"
            className={`font-semibold  ${
              !isDarkBackground
                ? "text-cyan-500 hover:text-cyan-600"
                : "hover:text-cyan-500"
            }`}>
            Na żywo
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={`font-semibold  ${
              !isDarkBackground
                ? "text-cyan-500 hover:text-cyan-600"
                : "hover:text-cyan-500"
            }`}>
            O nas
          </Link>
        </li>
        <li>
          <Link
            href="/newsletter"
            className={`font-semibold  ${
              !isDarkBackground
                ? "text-cyan-500 hover:text-cyan-600"
                : "hover:text-cyan-500"
            }`}>
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`font-semibold  ${
              !isDarkBackground
                ? "text-cyan-500 hover:text-cyan-600"
                : "hover:text-cyan-500"
            }`}>
            Kontakt
          </Link>
        </li>
      </ul>
      <button
        className="block lg:hidden fixed top-8 lg:top-14 right-6 lg:right-12 hover:text-cyan-500"
        onClick={() => setIsNavbarVisible(true)}>
        <FaBars size={30} />
      </button>
      <div
        className={`fixed top-0 right-0 bottom-0 pt-14 px-12 bg-white/90 z-30 flex flex-col items-center duration-200 w-screen ${
          !isNavbarVisible ? "translate-x-[100%]" : "translate-x-0"
        }`}>
        <button
          onClick={() => setIsNavbarVisible(false)}
          className="self-end hover:text-cyan-500">
          <FaTimes size={30} />
        </button>
        <ul className="text-center flex flex-col gap-6">
          <li>
            <Link
              href="/music"
              className="font-semibold hover:text-cyan-500"
              onClick={() => setIsNavbarVisible(false)}>
              Muzyka
            </Link>
          </li>
          <li>
            <Link
              href="/live"
              className="font-semibold hover:text-cyan-500"
              onClick={() => setIsNavbarVisible(false)}>
              Na żywo
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="font-semibold hover:text-cyan-500"
              onClick={() => setIsNavbarVisible(false)}>
              O nas
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              className="font-semibold hover:text-cyan-500"
              onClick={() => setIsNavbarVisible(false)}>
              Newsletter
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-semibold hover:text-cyan-500"
              onClick={() => setIsNavbarVisible(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
