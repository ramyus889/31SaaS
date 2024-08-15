"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import useCustomHooks from "../hooks/useCustomHooks";

export default function Home() {
  const { gridSteck } = useCustomHooks();
  const [grid, setGrid] = useState(gridSteck);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[248px]">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold"
          >
            Tech Stack
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 "
          >
            Unleash the technology that power the modern SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((item) => (
            <div
              data-aos={item.fade}
              data-aos-delay={item.delay}
              key={item.id}
              className="dark:border bg-white shadow-md rounded-lg p-6 dark:bg-gray-950"
            >
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
