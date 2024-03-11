"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/Component/HeroSection/HeroSection";
import Footer from "@/Component/Navbar/Footer";
import Projects from "@/Component/Projects/Projects";
import TeamSection from "@/Component/Team/TeamSection";
import Loading from "../Component/LoadingSpinner/Loading";
import Contact from "@/Component/Contact/Contact";
import HeaderSmallSize from "@/Component/Navbar/HeaderSmallSize";
import HeaderLargeSize from "@/Component/Navbar/HeaderLargeSize";
import { useWindowSize } from "@/context/WindowWidthContext";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window) {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NextSeo
        title="شركة الناجي للكونكريت الجاهز - Concrete Supplier in Iraq"
        description="شركة الناجي هي من الشركات الرائدة في مجال إنتاج وتوريد الكونكريت الجاهز في العراق. نقدم خدمات عالية الجودة والمواد المستدامة لمشاريع البناء. تعرف على مشاريعنا بمجمع زهور بغداد السكني، مجمع دار السلام السكني، معمل حديد النهروان، ومجسر الرستمية. نحن شركة الناجي للكونكريت الجاهز."
        openGraph={{
          type: "website",
          url: "https://alnajeiq.com/",
          title: "Al Naje Company - Concrete Supplier in Iraq",
          description:
            "تعرف على مشاريعنا بمجمع زهور بغداد السكني، مجمع دار السلام السكني، معمل حديد النهروان، ومجسر الرستمية. نحن شركة الناجي للكونكريت الجاهز.",
          site_name: "شركة الناجي للكونكريت الجاهز",
        }}
      />
      <main dir="rtl">
        {width > 900 ? <HeaderLargeSize /> : <HeaderSmallSize />}
        <HeroSection />
        <Contact />
        <Projects />
        <TeamSection />
        <Footer />
      </main>
    </>
  );
}
