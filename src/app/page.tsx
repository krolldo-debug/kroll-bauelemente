import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import References from "@/components/References";
import Logos from "@/components/Logos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Logos />
        <About />
        <WhyUs />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
