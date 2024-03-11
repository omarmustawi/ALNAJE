import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// SlideOfProject.tsx
interface SlideOfProjectProps {
  title: string;
  img: string; // Assuming img is a URL or path
  openModal: () => void;
}

const SlideOfProject: React.FC<SlideOfProjectProps> = ({
  img,
  title,
  openModal,
}) => {
  return (
    <>
      <div className="w-[clac(400px)] h-[calc(300px)] sm:h-[calc(360px)] ">
        <Image
          className="rounded-md shadow-lg mx-auto sm:w-96 "
          width={300}
          height={300}
          src={img}
          alt="Al-Naje-project"
        />
        <div className="bg-light-gray rounded-md shadow-lg w-2/3 -translate-y-1/4 p-4 mx-auto">
          <h6 className="title text-lg md:text-xl text-gray-600">{title}</h6>
          <Link
            href={"#detailProject"}
            onClick={openModal}
            className="text-orange-color relative flex justify-center items-center mx-auto"
          >
            <FaArrowRight
              size={20}
              className="bg-orange-100 p-1 rounded-full animate-ping mr-2"
            />{" "}
            قراءة المزيد
          </Link>
        </div>
      </div>
    </>
  );
};

export default SlideOfProject;
