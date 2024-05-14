"use client";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
export default function Home() {
  let tabs = [
    {
      id: 1,
      label: "Authentication",
      header: "Authentication",
      content:
        "Implemented robust authentication mechanisms to safeguard user data and ensure secure API calls.",
      table: {
        table1: "User authentication with Appwrite database",
        table2: "Secure route from client-side and server-side operations",
        table3: "Generate JWTs to authenticate server API calls",
      },
    },
    {
      id: 2,
      label: "Payments",
      header: "Payments",
      content: "Streamline payment processing with Stripe.",
      table: {
        table1: "Create checkout sessions",
        table2: "Manage Stripe's billing",
        table3: "Webhook integration to update user's purchase",
      },
    },
    {
      id: 3,
      label: "Database",
      header: "Database",
      content: "Flexibly manage your data with Appwrite",
      table: {
        table1: "Integrated with Appwrite for database management",
        table2:
          "Integrated with TanStack React query to ensure query stability",
        table3: "Swap with your favorite database if you wish",
      },
    },
    {
      id: 4,
      label: "Email",
      header: "Email",
      content: "Integrated with Resend.",
      table: {
        table1: "Send transactional emails",
        table2:
          "Configure domain to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
      },
    },
    {
      id: 5,
      label: "Blog",
      header: "Blog",
      content: "Utilized Content Layer to create and manage blog posts.",
      table: {
        table1: "Write blogs in MDX format",
        table2: "Lightweight content SDK to validate content",
      },
    },
    {
      id: 6,
      label: "SEO",
      header: "SEO",
      content: "SEO optimization.",
      table: {
        table1: "Sitemap generator",
        table2: "robots.txt generator",
        table3: "OpenGraph tags handling",
        table4: "SEO metadata centralized configuration",
        table5: "JSON-LD script for Rich Snippets",
      },
    },
    {
      id: 7,
      label: "UX",
      header: "UX",
      content: "Visually appealing UI components and responsive design.",
      table: {
        table1: "Install, copy paste, and customize from Shadcn UI library",
        table2: "Customize with Tailwind CSS",
        table3: "Embedded Dark mode",
        table4: "Mobile responsive",
      },
    },
    {
      id: 8,
      label: "Sample",
      header: "Sample",
      content: "Pre-built samples for efficient web development.",
      table: {
        table1: "Sample CRUD page",
        table2: "Sample landing page sections included",
        table3:
          "Sample subscriber page with form collection integrated with database",
        table4: "Custom not found page",
        table5: "Segmented access with parallel route setup",
      },
    },
    {
      id: 9,
      label: "Compliance",
      header: "Compliance",
      content: "Built a secure foundation for your application.",
      table: {
        table1: "Sample privacy policy and T&C pages",
        table2: "Vercel Analytics integrated for insightful data",
        table3: "Zod validation on every form submission",
        table4: "Strict TypeScript to build enterprise-ready product",
        table5: "Next.js App Router to segregate server and client components",
      },
    },
  ];
  return (
    <div className="">
      <div className="flex text-center place-content-center container px-5 max-[1000px]:mt-[80px] mt-[248px]">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="sm:text-3xl md:text-6xl text-3xl leading-[1.1] font-bold">
              Key Features
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
              Comprehensive suite of features to launch a usable SaaS that is
              beautiful.
            </p>
          </div>
          <div className="flex place-content-center">
            <div className="flex md:w-full sm:w-[600px] w-[340px] flex-col">
              <Tabs
                aria-label="Dynamic tabs"
                items={tabs}
                className="flex place-content-center "
              >
                {(item) => (
                  <Tab key={item.id} title={item.label}>
                    <Card className="p-3">
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
