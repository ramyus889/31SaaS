"use client";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useCustomHooks from "../hooks/useCustomHooks";

export default function Home() {
  const { tabs } = useCustomHooks();
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[248px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2
              data-aos="fade-up"
              className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold"
            >
              Key Features
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 "
            >
              Comprehensive suite of features to launch a usable SaaS that is
              beautiful.
            </p>
          </div>
          <div className="flex place-content-center">
            <div className="flex md:w-full sm:w-[600px] w-[340px] flex-col">
              <Tabs
                aria-label="Dynamic tabs"
                data-aos="fade-up"
                data-aos-delay="400"
                items={tabs}
                className="flex place-content-center "
              >
                {(item) => (
                  <Tab key={item.id} title={item.label}>
                    <Card
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="p-3"
                    >
                      <CardHeader className="text-2xl font-semibold leading-none tracking-tight">
                        {item.header}
                      </CardHeader>
                      <CardBody>
                        <div className="text-sm text-muted-foreground">
                          {item.content}
                        </div>
                        {item.table && (
                          <ul className="flex flex-col gap-5 pt-5">
                            {Object.values(item.table).map(
                              (tableItem, index) => (
                                <li
                                  key={index}
                                  className="flex gap-5 items-center"
                                >
                                  <span className="flex h-2 w-2 translate-y-0 rounded-full bg-sky-500"></span>{" "}
                                  {tableItem}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
