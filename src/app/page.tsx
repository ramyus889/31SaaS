"use client";

import Main from "./components/Main";
import TechStack from "./components/TechStack";
import KeyFeatures from "./components/KeyFeatures";
import BuildYouself from "./components/BuildYouself";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FastFooter from "./components/FastFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Main />
      <TechStack />
      <KeyFeatures />
      <BuildYouself />
      <Pricing />
      <FAQ />
      <FastFooter />
      <Footer />
    </div>
  );
}
