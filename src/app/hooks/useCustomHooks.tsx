import ContentSvg from "../components/Logo/ContentSvg";
import NextSvg from "../components/Logo/NextSvg";
import ReactSvg from "../components/Logo/ReactSvg";
import ResendSvg from "../components/Logo/ResendSvg";
import ShadcnSvg from "../components/Logo/ShadcnSvg";
import StripeSvg from "../components/Logo/StripeSvg";
import TailwindSvg from "../components/Logo/TailwindSvg";
import TanStackSvg from "../components/Logo/TanStackSvg";
import WriteSvg from "../components/Logo/WriteSvg";
export default function Hooks() {
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
  const gridSteck = [
    {
      id: 1,
      name: "NextJs 14",
      fade: "fade-right",
      delay: "300",
      image: <NextSvg />,
      text: "A React framework for building fast and scalable web applications.",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      fade: "fade-up",
      delay: "300",
      image: <TailwindSvg />,
      text: "A utility-first CSS framework for rapidly building custom designs.",
    },
    {
      id: 3,
      name: "Shadcn UI + Radix UI",
      fade: "fade-left",
      delay: "300",
      image: <ShadcnSvg />,
      text: "Stunning accessible, customizable, and composable UI components.",
    },
    {
      id: 4,
      name: "React 18",
      fade: "fade-right",
      delay: "400",
      image: <ReactSvg />,
      text: "Popular JavaScript library for building user interfaces.",
    },
    {
      id: 5,
      name: "Appwrite",
      fade: "fade-up",
      delay: "400",
      image: <WriteSvg />,
      text: "A secure and scalable backend-as-a-service platform.",
    },
    {
      id: 6,
      name: "Resend",
      fade: "fade-left",
      delay: "400",
      image: <ResendSvg />,
      text: "A reliable and scalable email delivery service.",
    },
    {
      id: 7,
      name: "Stripe",
      fade: "fade-right",
      delay: "500",
      image: <StripeSvg />,
      text: "Stripe facilitates secure payments, subscriptions, and fraud prevention for businesses",
    },
    {
      id: 8,
      name: "TanStack React Query",
      fade: "fade-up",
      delay: "500",
      image: <TanStackSvg />,
      text: "A powerful data fetching and caching library for React.",
    },
    {
      id: 9,
      name: "Content Layer",
      fade: "fade-left",
      delay: "500",
      image: <ContentSvg />,
      text: "A powerful content management system for creating and managing content.",
    },
  ];
  return {
    tabs,
    gridSteck,
  };
}
