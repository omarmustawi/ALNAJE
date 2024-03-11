import React from "react";
import Image from "next/image";
import { DetailProjectProps } from "@/interface/interface";
import { scrollToSection } from "../Navbar/HeaderLargeSize";
import Slider from "react-slick";

export default function Modal({
  detailProject,
  closeModal,
}: {
  detailProject: DetailProjectProps;
  closeModal: () => void;
}) {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    initialSlide: 0, // Index of the first slide
  };

  return (
    <section id="detailProject" className="detailProject">
      <div>
        <span className="w-full md:w-1/2 my-auto">
          <h1> {detailProject.subtitle} </h1>
          <p className=" text-gray-color">{detailProject.paragraph}</p>
        </span>
        <div className=" sm:w-96 m-auto">
          <Slider {...settings} className="relative sm:w-96 gap-6 flex  my-8">
            {/* Map over the array of images in detailProject.img */}
            {detailProject.img.map((image, index) => (
              <Image
                key={index}
                src={`${image}`}
                alt=""
                width={300}
                height={300}
                className="rounded-md"
              />
            ))}
          </Slider>
        </div>
      </div>
      <button
        onClick={() =>
          Promise.resolve(closeModal()).then(() =>
            scrollToSection("slides-projects")
          )
        }
        className="btn my-4 mx-auto block relative"
      >
        عودة
      </button>
    </section>
  );
}
