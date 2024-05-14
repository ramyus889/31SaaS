"use client";

import Link from "next/link";
import NavLogoSvg from "./NavLogoSvg";
import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <footer className="py-3 border-t mt-[250px] flex place-content-center max-[1000px]:mt-[80px]">
      <div className="flex justify-center">
        <div className="bg-black/5 p-6 text-sm text-center ">
          <div className="container me-6 py-3 text-center md:text-left">
            <div className="grid grid-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col ">
                <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
                  <div className="flex gap-2">
                    <NavLogoSvg />
                    <span>31SaaS</span>
                    <span className="text-muted-foreground ">
                      &nbsp;by&nbsp;
                    </span>
                    <Link
                      href="https://www.saidhasyim.com"
                      className="underline pb-2"
                    >
                      Said Hasyim
                    </Link>
                  </div>
                </h6>
                <p className="text-sm leading-loose md:text-left">
                  Make shipping your own SaaS a reality
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="leading-loose text-sm flex md:text-lg justify-center font-semibold uppercase md:justify-start">
                  More
                </div>
                <Link href="#" className="text-muted-foreground">
                  31Memorize
                </Link>
                <Link href="#" className="text-muted-foreground">
                  31Trace
                </Link>
                <Link href="#" className="text-muted-foreground">
                  Peek Productivity Books
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="leading-loose text-sm flex md:text-lg justify-center font-semibold uppercase md:justify-start">
                  Legal
                </div>
                <Link href="#" className="text-muted-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-muted-foreground">
                  Privacy
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="leading-loose text-sm flex md:text-lg justify-center font-semibold uppercase md:justify-start">
                  Contact
                </div>
                <Link
                  href="#"
                  className="text-muted-foreground flex gap-3 items-center"
                >
                  <FiMail size="18" /> support@saidhasyim.com
                </Link>
              </div>
            </div>
            <p className="text-muted-foreground text-sm text-center pt-9">
              © 2024 Copyright. 31SaaS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
