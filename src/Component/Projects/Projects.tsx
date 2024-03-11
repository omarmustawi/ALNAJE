import React from "react";
import Counting from "./Counting";
import icon1 from "@/Images/Icon1.svg";
import icon2 from "@/Images/Icon2.svg";
import icon4 from "@/Images/Icon4.svg";
import icon3 from "@/Images/Icon3.svg";
import project1 from "../../../public/Icons/project1.jpg";
import Image from "next/image";
// import dataProjects from "@/data/dataProjects.json";

import SlideOfProject from "./SlideOfProject";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { DetailProjectProps } from "@/interface/interface";
import Modal from "../Modal/Modal";
import { useModal } from "../../context/useModalContext";
import PROJECTS, { Project } from "@/data/projects";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const data = [
  {
    id: 1,
    icon: icon1,
    num: 46328,
    paragraph: "من العملاء الذين يثقون بنا",
  },
  {
    id: 2,
    icon: icon2,
    num: 2245341,
    paragraph: "الاشخاص الذين يوصون بنا",
  },
  {
    id: 3,
    icon: icon3,
    num: 13,
    paragraph: "مشاريع قيد التنفيذ ",
  },
  {
    id: 4,
    icon: icon4,
    num: 235,
    paragraph: "من المشاريع التي تم انجازها",
  },
];

export default function Projects() {
  const { isModalOpen, selectedProject, openModal, closeModal } = useModal();
  const { sectionRef, isVisible } = useIntersectionObserver();

  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    // slidesToShow: width <= 900 ?  1 : width < 1200 ? 2 :  3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Index of the first slide
    responsive: [
      {
        breakpoint: 2024, // Large screen breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100, // Medium screen breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Medium screen breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* start row 1 */}
      <section
        id="projects"
        className="bg-light-gray w-screen p-6 lg:py-10 lg:px-10  grid grid-cols-1 lg:grid-cols-2 "
      >
        <div className="m-auto ">
          <div className="title text-center lg:text-start leading-10 lg:leading-relaxed">
            تصفح مشاريعنا:{" "}
            <span className="text-orange-color">
              {" "}
              قصص الإنجاز والتميز بين أيدينا وفي طور التنفيذ{" "}
            </span>
          </div>
          <p className="text-gray-600 paragraph text-center lg:text-start leading-10 lg:leading-relaxed">
            تجارب متنوعة تعكس الإبداع والاحترافية في كل تفاصيل عملنا
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {data.map((ele) => (
            <Counting
              key={ele.id}
              icon={ele.icon}
              num={ele.num}
              paragraph={ele.paragraph}
            />
          ))}
        </div>
      </section>
      {/* end row 1 */}

      {/* start row 2 */}
      <section
        ref={sectionRef}
        className="w-screen p-7 flex flex-col lg:flex-row justify-around items-center gap-7"
      >
        <div
          className={`lg:w-1/2 relative animated-section ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h4 className="title my-5">
            مشروعنا الجديد: نحو التميز والابتكار في التنفيذ
          </h4>
          <p className="paragraph text-lg">
            {" "}
            نفتخر بالعمل على مشروعنا الجديد الذي يجسد روح الإبداع والتطور.
            بجهودنا وتفانينا، نسعى إلى تحقيق معايير عالية في التنفيذ، مع التركيز
            على التكنولوجيا الحديثة والابتكارات التقنية. تعرّف على تفاصيل هذا
            المشروع الملهم والمبتكر الذي نعمل على تحقيقه بشغف وإبداع.{" "}
          </p>
          <Link
            href={"#detailProject"}
            className="btn absolute  -translate-x-1/2 left-1/2 lg:left-0 "
            onClick={() => openModal(PROJECTS[0].detailProject)} // here our new project is the first element in data json dataProjects file
          >
            قراءة المزيد
          </Link>
        </div>

        <Image
          className={`lg:w-1/3 my-8 lg:my-0 mx-auto animated-image rounded-md ${
            isVisible ? "is-visible" : ""
          }`}
          src={project1}
          alt={`Al-Naje-project`}
        />
      </section>
      {/* end row 2 */}

      {/* start row 3 */}
      <section className="m-7 sm:m-10 md:m-16 lg:m-20">
        <h4 className="title">
          {" "}
          رحلتنا في الإنجاز، مشاريعنا الملهمة والمنجزة{" "}
        </h4>
        <div className="paragraph lg:w-1/2 text-center text-lg  m-auto">
          تفخر شركتنا بسجل حافل من المشاريع الناجحة والملهمة التي تم إتمامها
          بنجاح. تستند هذه المشاريع على الابتكار والجودة والتفاني، حيث نحرص
          دائمًا على تحقيق أعلى معايير الأداء وتلبية تطلعات عملائنا. اطلع على
          أعمالنا السابقة واستلهم من التنوع والتميز الذي نقدمه في كل مشروع نقوم
          به.
        </div>

        {/* slides of projects */}
        <section id="slides-projects" className="relative">
          <Slider
            {...settings}
            className="flex justify-around my-16 gap-4 "
          >
            {PROJECTS.map((project: Project) => (
              <SlideOfProject
                key={project.id}
                title={project.title}
                img={project.img}
                openModal={() => openModal(project.detailProject)}
              />
            ))}
          </Slider>
        </section>

        {/* Render Modal */}
        {isModalOpen && (
          // @ts-ignore
          <Modal detailProject={selectedProject} closeModal={closeModal} />
        )}
      </section>
      {/* end row 3 */}
    </>
  );
}
