"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Button from "./components/Button"
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto">
          <img src="assets/three-dots.svg" alt="dots" className="absolute left-0 top-1/5 w-15 lg:w-25 h-auto" />
        <div className="w-full mt-10 pt-20 pl-23">
          <h1 className="text-xl md:text-3xl lg:text-5xl mulish-bold text-black leading-tight">Virtual healthcare <br/>for you</h1>
          <p className="md:text-3lg lg:text-xl text-zinc-500 mulish-font leading-relaxed pt-5 mb-7">Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
          <Button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border border-blue-500 mulish-bold mt-8" onClick={() => void 0}>Consult today</Button>
        </div>
          <img src="assets/header-illustration.svg" alt="header-illustration" className="lg:w-190 lg:h-200 w-max-200 h-max-200 pt-30 pr-10" />
      </section>
      <HeroSection />
      <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto">
          <img src="assets/trafalgar-illustration.svg" alt="trafalgar" className="w-190 h-200 ml-5" />
        <div className="mr-18 pr-32">
          <h2 className="text-xl md:text-2xl lg:text-4xl mulish-bold text-black leading-[4rem]">Leading healthcare <br/>providers</h2>
          <div className="w-10 h-0.5 lg:w-15 lg:h-0.5 bg-black mt-5"></div>
          <p className="text-lg md:text-2lg lg:text-4lg text-zinc-400 mulish-font leading-relaxed pt-7 w-110 h-45">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
          <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-font hover:bg-blue-500 hover:text-white">Learn more</Button>
        </div>
      </section>
      <section className="flex md:flex-row items-center justify-between container mt-15 mx-auto">
        <div className="relative">
          <img src="assets/three-dots.svg" alt="dots" className="absolute right-0 t op-[30%]w-15 lg:w-25 h-auto" />
        </div>
        <div className="ml-15 pl-30">
          <h2 className="text-xl md:text-2xl lg:text-4xl mulish-bold text-black leading-[3rem]">Download our <br/>mobile apps</h2>
          <div className="w-10 h-0.5 lg:w-15 lg:h-0.5 bg-black mt-5"></div>
          <p className="text-lg md:text-2lg lg:text-4lg text-zinc-400 mulish-font leading-relaxed pt-7 w-100 h-50">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
          <Button onClick = {() => void 0} className="bg-white text-blue-500 border border-blue-500 mulish-font hover:bg-blue-500 hover:text-white group">Download <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5 pl-2 pb-1 group-hover:text-white">
            <path d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" fill="currentColor"/>
            </svg>
          </Button>
        </div>
          <img src="assets/trafalgar-illustration-2.svg" alt="trafalgar-2" className="w-190 h-200 mr-20" />
      </section>
    </main>
  );
}
