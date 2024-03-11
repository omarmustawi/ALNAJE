/* eslint-disable react/jsx-key */
import { BsFillSendCheckFill } from "react-icons/bs";
// import { FaYoutube } from "react-icons/fa6";
// import { TbBallBasketball } from "react-icons/tb";
// import { BsInstagram } from "react-icons/bs";
// import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/Images/logo.svg";
import Image from "next/image";
import Loading from "../LoadingSpinner/Loading";
import toast, { Toaster } from "react-hot-toast";
// import dataProjects from "@/data/dataProjects.json";
import PROJECTS, { Project } from "@/data/projects";
import { useModal } from "../../context/useModalContext";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const success = () => toast.success("تم إرسال الرسالة بنجاح");
  const error = () => toast.error("لم يتم إرسال الرسالة  حدث خطأ ");

  const { isModalOpen, selectedProject, openModal, closeModal } = useModal();

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setMessage("");
        success();
      } else {
        setIsLoading(false);
        error();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <section className="m-7 sm:m-10 md:m-16 lg:m-20">
        {isModalOpen && (
          // @ts-ignore
          <Modal detailProject={selectedProject} closeModal={closeModal} />
        )}
      </section> */}
      <div className="bg-natural-black py-20 px-4 sm:px-14 text-gray-400">
        <footer className="flex flex-wrap gap-4 sm:gap-0 justify-around">
          {/* start col 1 */}
          <section>
            <div>أدخل رقم هاتفك للتواصل معك</div>
            <div className="input w-72 pl-3 pr-8 relative my-5">
              <input
                type="number"
                name="email"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input w-full text-left  "
                dir="ltr"
                placeholder="ادخل رقم هاتفك هنا واضغط ارسال"
              />
              <BsFillSendCheckFill
                onClick={handleSubmit}
                size={20}
                className="absolute top-3 right-3 hover:text-slate-100 "
              />
            </div>
          </section>
          {/* end col 1 */}

          <div className="flex gap-10 lg:gap-20 justify-around">
            {/* start col 2 */}
            <section>
              <h1> مشاريعنا </h1>
              <ul className="height-line">
                {PROJECTS.map((project: Project) => (
                  <li key={project.id}>
                    {" "}
                    <Link href={"#detailProject"} onClick={() => openModal(project.detailProject)}>
                      {" "}
                      {project.title}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            {/* end col 2 */}

            {/* start col 3 */}
            <section>
              <h1> الناجي </h1>
              <ul className="height-line">
                <li className="relative group">
                  {" "}
                  <Link href={"#home"}> الرئيسية </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={"#about"}> من نحن </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={"#services"}> خدماتنا </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={"#team"}> فريقنا </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={"#projects"}> مشاريعنا </Link>{" "}
                </li>
              </ul>
            </section>
            {/* end col 3 */}
          </div>

          {/* start col 4 */}
          <section className="leading-10">
            <Image className="w-40 m-auto" src={logo} alt="" />
            <p>
              {" "}
              جميع الحقوق محفوظة لصالح شركة الناجي @2024 
            </p>
            <div className=" flex justify-center gap-3 my-5 items-center">
            <Link
                href={
                  "https://2h.ae/kBvc"
                }
              >
                <FaWhatsapp size={20} />
              </Link>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61555778226231"
                }
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href={
                  "https://t.me/alnaje_company"
                }
              >
                <FaTelegramPlane size={20} />
              </Link>
              
              <Link
                href={
                  "https://www.instagram.com/alnajeiq"
                }
              >
                <FaInstagram size={20} />
              </Link>

              {/* <Link
                href={
                  "https://www.instagram.com/iqcodecrafters?igsh=NzljZ2Z5YzB4eHNu"
                }
              >
                <FaYoutube size={20} />
              </Link> */}
              {/* <Link
                href={
                  "https://www.instagram.com/iqcodecrafters?igsh=NzljZ2Z5YzB4eHNu"
                }
              >
                <TbBallBasketball size={20} />
              </Link> */}
              {/* <Link
                href={
                  "https://www.instagram.com/iqcodecrafters?igsh=NzljZ2Z5YzB4eHNu"
                }
              >
                <BsInstagram size={20} />
              </Link> */}
              {/* <Link
                href={
                  "https://www.instagram.com/alnajeiq/"
                }
              >
                <FaTwitter size={20} />
              </Link> */}
            </div>
          </section>
          {/* end col 1 */}
        </footer>
      </div>
      {isLoading && <Loading />}
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}
