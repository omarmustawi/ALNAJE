import Image from "next/image";
import React from "react";
import NumberAnimation from "./NumberAnimation";

export default function Counting({
  icon,
  num,
  paragraph,
}: {
  icon: any;
  num: number;
  paragraph: string;
}) {
  return (
    <div className="flex justify-center gap-6 md:gap-0 ">
      <div className="w-44">
        <h4 className="title m-auto text-center">
          {" "}
          <NumberAnimation endValue={num} />{" "}
        </h4>
        <p className="paragraph m-auto text-center"> {paragraph} </p>
      </div>
      <Image width={50} src={icon} alt="" />
    </div>
  );
}
