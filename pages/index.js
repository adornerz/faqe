import {useState} from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import HeroSection from "../components/sections/Hero"
import BenefitsSection from "../components/sections/BenefitsSection"
import { Spacer } from "../components/Spacer"
import ContactSection from "../components/sections/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar  toggle={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
        <HeroSection />
        <Spacer image="layered-waves-2.svg"/>
        <BenefitsSection />
      <Spacer image="layered-waves-3.svg"/>
      <ContactSection />
      <Footer />
    </>
  )
}
