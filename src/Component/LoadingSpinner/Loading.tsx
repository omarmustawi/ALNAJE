"use client";
import Image from "next/image";
// Loading.js
import React from "react";
import LoadingSpinner from "react-loading";
import loadingLogo from "@/Images/loadingLogo.svg";

const Loading = () => {
  return (
    <div>
      <div className="loading-container">
        <Image src={loadingLogo} alt="" width={300} />
        <LoadingSpinner type="spin" color="#717577" height={50} width={50} />
        <p>يرجا الانتظار ...</p>
      </div>
    </div>
  );
};

export default Loading;
