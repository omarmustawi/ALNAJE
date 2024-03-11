import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Member } from "@/interface/interface";

export default function CardMember({member}: {member: Member}): React.JSX.Element  {
  return (
    <div dir="rtl" key={member.id} className="flex flex-col  sm:flex-row md:flex-col xl:flex-row items-center  gap-6 mx-auto border-2 border-gray-200 p-4 rounded-md  w-[calc(100%-15px)] shadow-sm">
      <Image
        className="rounded-md min-w-48 w-2/3 h-fit"
        src={member.img}
        alt={""}
        width={500}
        height={100}
      />
      <div className="paragraph relative">
        <span className="text-orange-color font-medium"> {member.name} </span>
        <p className="font-medium"> {member.role} </p>
        <p> {member.description} </p>
        <div className="flex gap-2 absolute left-0">
          <Link href={member.whatapp}>
            <FaWhatsapp size={20} />
          </Link>
          <Link href={member.telegram}>
            <FaTelegramPlane size={20} />
          </Link>
          <Link href={member.facebook}>
            <FaFacebookF size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
