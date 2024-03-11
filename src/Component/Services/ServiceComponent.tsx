import Image from "next/image";
import React from "react";

export default function ServiceComponent({
  icon,
  title,
  paragraph,
}: {
  icon: any;
  title: string;
  paragraph: string;
}) {
  return (
    <section>
      <div>
        <Image className="animate-pulse-bounce" src={icon} alt={"icon"} width={100} height={100} />
      </div>
      <h4 className=" title text-start text-2xl lg:text-3xl"> {title} </h4>
      <p className="paragraph"> {paragraph} </p>
    </section>
  );
}
