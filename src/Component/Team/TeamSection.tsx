/* eslint-disable react/jsx-key */
import CardMember from "./CardMember";
import React from "react";
import dataTeam from "@/data/dataTeam.json";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIsOpenContact } from "@/context/IsOpenContact";

export default function TeamSection() {
  const { setIsOpenContact } = useIsOpenContact();
  // const settings = {
  //   dots: true, // Show dots navigation
  //   infinite: true, // Enable infinite loop
  //   speed: 500, // Transition speed in milliseconds
  //   // slidesToShow: width <= 900 ?  1 : width < 1200 ? 2 :  3, // Number of slides to show at a time
  //   slidesToScroll: 1, // Number of slides to scroll at a time
  //   initialSlide: 0, // Index of the first slide
  //   responsive: [
  //     {
  //       breakpoint: 2024, // Large screen breakpoint
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1300, // Medium screen breakpoint
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768, // small screen breakpoint
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <section id="team" className="m-10 lg:m-20 ">
        {/* start row 1 */}
        <h1 className="title text-start">
          فريقنا، روح الابتكار والتميز في كل تحدي
        </h1>
        <p className="paragraph text-start md:w-1/2 text-lg">
          نحن فريق متحد وملهم يسعى لتحقيق التميز في كل عمل نقوم به. نضمن جودة
          العمل والإبداع من خلال تنوع الخبرات والمهارات التي يمتلكها كل فرد
          فينا، محققين التوازن المثالي بين الاحترافية والإبداع لتحقيق النجاح
          المستدام.
        </p>
        {/* end row 1 */}

        {/* start row 2 slides of members */}
        {/* <Slider {...settings} className="flex gap-x-8 justify-center "> */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center ">
          {dataTeam.map((member) => (
            <CardMember key={member.id} member={member} />
          ))}
        </div>
        {/* </Slider> */}
        {/* end row 2 slides of members */}
      </section>

      {/* start row 3 */}
      <section className="bg-light-gray py-10 px-10 ">
        <h1 className="title sm:w-1/2 m-auto font-normal xl:font-bold">
          نحن نسعد بفرصة خدمتكم والتعاون معكم في تحقيق أهدافكم. اتصلوا بنا اليوم
          لنبدأ معًا رحلة النجاح والإبداع في مشاريعكم المستقبلية
        </h1>
        <Link
          onClick={() => setIsOpenContact(true)}
          className="btn flex w-fit m-auto text-center my-10"
          href={"#contact"}
        >
          اتصل بنا
        </Link>
      </section>
      {/* end row 3 */}
    </>
  );
}
