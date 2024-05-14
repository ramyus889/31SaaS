"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
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
              FAQ
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 "
            >
              Common queries addressed.
            </p>
          </div>
          <div className=" w-[300px] sm:w-[600px] md:w-[740px]">
            <Accordion variant="light" className="">
              <AccordionItem
                key="1"
                data-aos="fade-up"
                data-aos-delay="400"
                aria-label="Accordion 1"
                className="text-left text-muted-foreground"
                title="Can I customize 31SaaS to fit my specific needs?"
              >
                Absolutely! 31SaaS is designed to be highly flexible and
                customizable. You can easily swap out components, integrate
                additional features, and tailor the design to match your unique
                requirements.The database has already been set up using TanStack
                queries. You can replace it with another database and apply the
                same configuration.
              </AccordionItem>
              <AccordionItem
                key="2"
                data-aos="fade-up"
                data-aos-delay="400"
                aria-label="Accordion 2"
                className="text-left text-muted-foreground"
                title="What do I get after purchasing?"
              >
                Upon purchasing 31SaaS, the email you used to purchase will be
                granted access to the GitHub repository containing the complete
                source code to what you see in the demo. Refer to the
                documentations to get started with the development quickly.
              </AccordionItem>
              <AccordionItem
                key="3"
                data-aos="fade-up"
                data-aos-delay="400"
                aria-label="Accordion 3"
                className="text-left text-muted-foreground"
                title="Do you offer a refund?"
              >
                Unfortunately, I&#39;m unable to offer refunds for purchases of
                31SaaS. As a digital product with immediate access to source
                code, we cannot provide refunds once the transaction is
                completed. However, it&#39;s worth noting that by utilizing
                31SaaS, you can accelerate your SaaS development process,
                enabling you to launch your product faster and start generating
                revenue sooner
              </AccordionItem>
              <AccordionItem
                key="4"
                data-aos="fade-up"
                data-aos-delay="400"
                aria-label="Accordion 4"
                className="text-left text-muted-foreground"
                title="Typesript or Javascript?"
              >
                Typescript only. If you&#39;re starting a new project, embracing
                Typescript from the beginning lays a solid foundation for
                building a robust enterprise-ready system. Don&#39;t worry,
                Typescript is not as difficult as it seems.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
