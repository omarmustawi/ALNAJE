import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Rectangle from "@/Images/Rectangle.svg";
import ServiceComponent from "./ServiceComponent";
import data from "@/data/services.json";
import Link from "next/link";
import { useIsOpenContact } from "@/context/IsOpenContact";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Services() {
  const { setIsOpenContact } = useIsOpenContact();
  const { sectionRef, isVisible } = useIntersectionObserver();


  return (
    <section className="m-4 md:m-8">
      <div className="flex flex-wrap md:flex-nowrap gap-4 ">
        {data.map(
          (item: {
            id: number;
            icon: any;
            title: string;
            paragraph: string;
          }) => (
            <ServiceComponent
              key={item.id}
              icon={item.icon}
              title={item.title}
              paragraph={item.paragraph}
            />
          )
        )}
      </div>
      <div
        ref={sectionRef} // Make sure the ref is assigned here
        className="flex flex-col lg:flex-row justify-center items-center"
      >
        <div
          className={`lg:w-1/2 relative mb-8 lg:mb-0 animated-section ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h4 className="title  text-start">
            تواصل مع خبراء البناء والخرسانة الجاهزة لمشاريعك القادمة
          </h4>
          <p className="paragraph text-center lg:text-start">
            في شركتنا، نقدم لكم تجربة فريدة من خلال فريق متخصص يتمتع بخبرة واسعة
            في مجال البناء والخرسانة الجاهزة. سواء كنتم تخططون لمشروع كبير أو
            صغير، فنحن هنا لمساعدتكم في تحقيق أهدافكم. اتصلوا بنا اليوم للحصول
            على استشارة مجانية وتقديم الخدمات المخصصة التي تناسب احتياجاتكم
            بأفضل جودة وأسعار تنافسية. فريقنا مستعد للتعاون معكم في كل خطوة على
            طريق النجاح في مشروعكم القادم.
          </p>

          <Link
            onClick={() => setIsOpenContact(true)}
            className="btn absolute left-1/2 -translate-x-1/2"
            href="#contact"
          >
            {" "}
            اتصل بنا
          </Link>
        </div>
        <Image
          className={`animated-image ${isVisible ? "is-visible" : ""}`}
          src={Rectangle}
          alt={"Rectangle"}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
