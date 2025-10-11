import Services from "@/components/layout/Services";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}
