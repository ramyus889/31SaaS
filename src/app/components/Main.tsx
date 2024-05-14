import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex place-content-center text-center mt-[256px] max-[1000px]:mt-[50px]  px-5">
      <div className="container max-w-[64rem] flex flex-col gap-4 items-center">
        <div className="xl:text-6xl/none sm:text-5xl text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent tracking-tighter from-white to-gray-500">
          Build a Modern Sleek SaaS in Days
        </div>
        <div className="max-w-[42rem]  sm:text-xl sm:leading-8 leading-normal text-muted-foreground">
          NextJs boilerplate that has everything you need to build a working
          product, not MVP
        </div>
        <div className="flex flex-col w-full gap-3 min-[400px]:flex-row justify-center">
          <Button
            as={Link}
            href="#"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-blue-600 h-11 rounded-md px-8"
          >
            Buy
          </Button>
          <Button
            as={Link}
            href="#"
            className="inline-flex gap-5 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-6  items-center space-x-2"
          >
            <div className="animate-ping h-3 w-3 bg-green-500 rounded-full"></div>
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
