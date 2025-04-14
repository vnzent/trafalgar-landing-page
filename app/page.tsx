"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import Button from "./components/Button"
import HeroSection from "./components/ServicesSection";
import HealthCareSection from "./components/HealthCareSection";
import MobileAppsSection from "./components/MobileAppsSection";
import SubHeading from "./components/SubHeading";
import ServiceCard from "./components/ServiceCard";
import ArticlesSection from "./components/ArticlesSection";
import Footer from "./components/Footer"; 

export default function Home() {
  
  return (
    <main>
      <NavBar />
      <HeaderSection />
      <HeroSection />
      <HealthCareSection />
      <MobileAppsSection />
      <ArticlesSection />
      <Footer />
    </main>
  );
}
