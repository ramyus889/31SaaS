"use client";

import { useState } from "react";

import NextSvg from "./Logo/NextSvg";
import TailwindSvg from "./Logo/TailwindSvg";
import ShadcnSvg from "./Logo/ShadcnSvg";
import ReactSvg from "./Logo/ReactSvg";
import ResendSvg from "./Logo/ResendSvg";
import StripeSvg from "./Logo/StripeSvg";
import TanStackSvg from "./Logo/TanStackSvg";
import ContentSvg from "./Logo/ContentSvg";
import WriteSvg from "./Logo/WriteSvg";

const gridSteck = [
  {
    id: 1,
    name: "NextJs 14",
    image: <NextSvg />,
    text: "A React framework for building fast and scalable web applications.",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    image: <TailwindSvg />,
    text: "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    id: 3,
    name: "Shadcn UI + Radix UI",
    image: <ShadcnSvg />,
    text: "Stunning accessible, customizable, and composable UI components.",
  },
  {
    id: 4,
    name: "React 18",
    image: <ReactSvg />,
    text: "Popular JavaScript library for building user interfaces.",
  },
  {
    id: 5,
    name: "Appwrite",
    image: <WriteSvg />,
    text: "A secure and scalable backend-as-a-service platform.",
  },
  {
    id: 6,
    name: "Resend",
    image: <ResendSvg />,
    text: "A reliable and scalable email delivery service.",
  },
  {
    id: 7,
    name: "Stripe",
    image: <StripeSvg />,
    text: "Stripe facilitates secure payments, subscriptions, and fraud prevention for businesses",
  },
  {
    id: 8,
    name: "TanStack React Query",
    image: <TanStackSvg />,
    text: "A powerful data fetching and caching library for React.",
  },
  {
    id: 9,
    name: "Content Layer",
    image: <ContentSvg />,
    text: "A powerful content management system for creating and managing content.",
  },
];
export default function Home() {
  const [grid, setGrid] = useState(gridSteck);
  return (
    <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[248px]">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h2 className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold">
            Tech Stack
          </h2>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
            Unleash the technology that power the modern SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((item) => (
            <div key={item.id} className="border rounded-lg p-6 bg-gray-950">
              <div className="mb-4 flex items-center">
                <div className="">{item.image}</div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <p className="text-left text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
