"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Button from "./components/Button"
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div>
          <img src="assets/three-dots.svg" alt="dots" className="pb-95 mb-5 w-15 h-auto" />
        </div>
        <div className="pb-10 mb-5 mr-25">
          <h1 className="text-4xl mulish-bold text-black leading-tight">Virtual healthcare <br/>for you</h1>
          <p className="text-zinc-500 mulish-font leading-relaxed pt-5 mb-7">Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
          <Button onClick={() => void 0}>Consult today</Button>
        </div>
          <img src="assets/header-illustration.svg" alt="header-illustration" className="w-150 h-150 mb-5 pt-10 mr-35 pb-10" />
      </section>
      <HeroSection />
    </main>
  );
}
