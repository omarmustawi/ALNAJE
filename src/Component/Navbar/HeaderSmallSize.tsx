"use client";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/Images/logo.svg";
import { useIsOpenContact } from "@/context/IsOpenContact";
import { scrollToSection } from "./HeaderLargeSize";

export default function HeaderSmallSize() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpenContact } = useIsOpenContact();

  return (
    <main className="p-5 flex justify-between text-color-1 text-xl  top-0 left-0 w-screen bg-white z-20 fixed   ">
      {isOpen ? (
        <IoCloseSharp
          onClick={() => setIsOpen(!isOpen)}
          className={"text-slate-600 cursor-pointer"}
          size={30}
        />
      ) : (
        <IoIosMenu
          onClick={() => setIsOpen(!isOpen)}
          className={"text-slate-600 cursor-pointer"}
          size={30}
        />
      )}
      <nav
        className={`bg-white shadow-md duration-1000 transition-all -z-10 top-20 absolute py-7 px-16 ${
          isOpen ? " right-0" : "-right-[calc(100%)] "
        }`}
      >
        <ul className="flex flex-col gap-3 ">
          <li className=" relative group w-fit">
            <Link href="#24r" onClick={() => scrollToSection("home")}>
              الرئيسة
            </Link>
            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group w-fit">
            <Link href="#24r" onClick={() => scrollToSection("about")}>
              من نحن
            </Link>
            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group w-fit">
            <Link href="#24r" onClick={() => scrollToSection("services")}>
              {" "}
              خدماتنا
            </Link>
            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group w-fit">
            <Link href="#24r" onClick={() => scrollToSection("projects")}>
              مشاريعنا
            </Link>
            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className=" relative group w-fit">
            <Link href="#24r" onClick={() => scrollToSection("team")}>
              فريقنا
            </Link>

            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="text-orange-color  relative group w-fit ">
            <Link
              onClick={() => {
                Promise.resolve(setIsOpenContact(true)).then(() =>
                  scrollToSection("contact")
                );
              }}
              href="#24r"
            >
              اتصل
            </Link>
            <div className=" absolute left-0 w-0 h-[2px] bg-orange-color transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>
      </nav>
      <Image src={logo} alt="" width={150} />
    </main>
  );
}
