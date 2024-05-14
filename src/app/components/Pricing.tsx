"use client";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div id="pricing" className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[217px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold">
              Pricing
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
              Invest once. Become a real founder.
            </p>
          </div>

          <div className="flex flex-wrap xl:flex-nowrap items-center bg-transparent backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-lg ring-1 ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
            <div className="p-8 sm:p-10 xl:flex-auto">
              {" "}
              <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">
                {" "}
                Lifetime Package{" "}
              </h3>{" "}
              <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">
                {" "}
                Save time, innovate, and maximize productivity{" "}
              </p>{" "}
              <div className="mt-12 flex items-center gap-x-4">
                {" "}
                <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                  Included features
                </h4>{" "}
                <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700"></div>{" "}
              </div>{" "}
              <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
                {" "}
                <li className="flex items-center gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  NextJs 14 boilerplate{" "}
                </li>
                <li className="flex items-center gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Build unlimited projects{" "}
                </li>
                <li className="flex items-center text-left gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Stripe payment integration, <br /> checkout and webhook{" "}
                </li>
                <li className="flex items-center text-left gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Appwrite database and authentication{" "}
                </li>
                <li className="flex items-center text-left gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  SEO, metadata, sitemap, JSON-LD{" "}
                </li>
                <li className="flex items-center text-left gap-x-2 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Lifetime access to future updates{" "}
                </li>{" "}
              </ul>{" "}
            </div>
            <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
              <div className="rounded-xl py-10 text-center ring-1 ring-inset ting-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tighter line-through">
                      $375
                    </span>
                    <span>$129</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">
                      /lifetime
                    </span>
                  </p>
                  <div className="flex justify-center mt-8 flex-col flex-shrink-0">
                    <Button>Purchase</Button>
                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      Sign up in seconds. Start shipping in days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
