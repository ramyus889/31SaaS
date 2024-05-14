"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[217px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold">
              Build. Fast. Beautifully.
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
              Take the smartcut to actually finish your dream project.
            </p>
          </div>
          <div className="flex place-content-center">
            <Button
              as={Link}
              href="#pricing"
              radius="sm"
              className="bg-white px-8 py-6 text-black"
            >
              Let&#39;s do it
            </Button>
          </div>
          <div className="pt-10 text-sm italic md:text-base/relaxed text-center text-gray-400">
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
