"use client";
import Image from "next/image";
import React, { useState } from "react";
import manSitting from "@/Images/man-sitting-in-front-of-laptop.svg";
import Loading from "../LoadingSpinner/Loading";
import toast from "react-hot-toast";
import { useIsOpenContact } from "@/context/IsOpenContact";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();

  const success = () => toast.success("تم إرسال الرسالة بنجاح");
  const error = () => toast.error("لم يتم إرسال الرسالة  حدث خطأ ");

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });
      const data = await response.json();
      if (data.success) {
        setIsLoading(false);
        // Optionally, reset form fields or show a success message
        setEmail("");
        setMessage("");
        setName("");
        success();
        setIsOpenContact(false);
      } else {
        setIsLoading(false);
        error();

        // Optionally, show an error message
      }
    } catch (error) {
      console.error("Error sending email", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {IsOpenContact && (
        <section
          id="contact"
          className="flex flex-col md:flex-row justify-around items-center md:m-10 lg:m-16"
        >
          <div className="bg-light-color shadow-sm rounded-2xl md:p-6 text-black-color lg:w-2/3 xl:w-1/3 w-3/4">
            <form
              className="flex flex-col justify-center items-center w-full  "
              onSubmit={handleSubmit}
            >
              <label className="w-full my-3">
                الاسم:
                <input
                  className="input bg-gray-200/50 shadow-sm p-2 block w-full my-3"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="w-full my-3">
                رقم الهاتف أو البريد الالكتروني:
                <input
                  className="input bg-gray-200/50 shadow-sm p-2 block w-full  my-3"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="w-full my-3">
                الموضوع:
                <textarea
                  className="input bg-gray-200/50 shadow-sm p-2 block w-full mx-auto h-48  my-3"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </label>
              <button className="btn rounded-3xl py-1 px-6" type="submit">
                إرسال
              </button>
            </form>{" "}
          </div>
          <Image className="" width={400} src={manSitting} alt={""} />
        </section>
      )}
      {isLoading && <Loading />}
    </>
  );
}
