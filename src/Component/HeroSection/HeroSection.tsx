import Image from "next/image";
import React from "react";
import img1 from "@/Images/img1.svg";
import img2 from "@/Images/img2.svg";
import img3 from "@/Images/img3.svg";
import img4 from "@/Images/img4.svg";
import img5 from "@/Images/img5.svg";
import img6 from "@/Images/img6.svg";
import img7 from "@/Images/img7.svg";
import Services from "../Services/Services";
import build from "@/Images/bulid.png";
import ANJ from "@/Images/ANJ.svg";
import maskGroup from "@/Images/Mask_Group.svg";
import buildingLeft from "@/Images/buildingLeft.svg";

export default function HeroSection() {
  return (
    <>
    {/* start row 1 */}
      <section id="home" className="relative w-screen h-screen bg-silver-light">
        <Image className="h-screen absolute" src={build} alt={""} />
        <div className="absolute flex items-end gap-2 bottom-1/3 left-0 ml-10 sm:ml-0 md:left-0 z-10  ">
          <Image className="absolute sm:relative left-10 sm:left-auto w-80 lg:w-96" src={ANJ} alt="" />
          <Image className=" relative -translate-x-full sm:translate-x-0 w-80 lg:w-96" src={buildingLeft} alt="" />
        </div>
        <Image className=" absolute top-0 -left-8  md:left-20 h-screen bg-gray-light-color " src={maskGroup} alt="" />

        <div className="bg-orange-color w-20 lg:w-28 h-screen absolute  top-0 left-0  z-10"></div>
      </section>
      {/* end row 1 */}

      {/* start row 2 */}
      <section id="about" className="p-4 md:mx-14 md:py-10 ">
        <h1 className="title "> شــركــــــائنــــــا </h1>
        <p className="paragraph text-center">
          {" "}
          نحن نعمل بالتعاون مع أكثر من 70 علامة تجارية رصينة{" "}
        </p>
        <div className="flex flex-wrap gap-3 justify-around my-8 ">
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img1} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img2} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img3} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img4} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img5} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img6} alt=" " />
          <Image className="w-6 sm:w-auto animate-pulse-bounce" src={img7} alt=" " />
        </div>
        <div  id="services" className="flex flex-col gap-3 items-center">
          <h1 className="title md:w-[calc(550px)] ">
            استكشف مجموعة خدماتنا المتنوعة والمتميزة في مجال الكونكريت الجاهز
          </h1>
          <span className="text-orange-color ">
            {" "}
            ما هي الخدمة التي تبحث عنها؟{" "}
          </span>
        </div>
        <Services />
      </section>
    </>
  );
}
