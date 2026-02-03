import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  Portfolio,
  Pricing,
  Testimonials,
  Process,
  About,
  FAQ,
  Contact,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Process />
        <About />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
