"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[217px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2
              data-aos="fade-up"
              className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold"
            >
              Build. Fast. Beautifully.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 "
            >
              Take the smartcut to actually finish your dream project.
            </p>
          </div>
          <div className="flex place-content-center">
            <Button
              data-aos="fade-up"
              data-aos-delay="400"
              as={Link}
              href="#pricing"
              radius="sm"
              className="bg-white px-8 py-6 text-black"
            >
              Let&#39;s do it
            </Button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="pt-10 text-sm italic md:text-base/relaxed text-center text-gray-400"
          >
            Using 31SaaS, I built a functional early version of&nbsp;{" "}
            <Link href="https://31memorize.com" className="underline">
              31Memorize
            </Link>{" "}
            &nbsp;within two days, enabling rapid validation.
          </div>
        </div>
      </div>
    </div>
  );
}
