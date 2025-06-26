"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";

const HeroSection = () => {
  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-20 px-4">
      <div className="container mc-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title gradient">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An Ai powered financial management platform that helps you track,
          analyze and optimise your spending with real-time insights
        </p>
        <div className="flex space-x-4 justify-center items-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image border-8 w-fit mx-auto">
            <Image
              src="/banner.jpeg"
              height={720}
              width={1080}
              alt="Banner"
              priority
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
        {/* <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold leading-none">
                    Scroll Animations
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={`/banner.jpeg`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div> */}
      </div>
    </div>
  );
};
export default HeroSection;
