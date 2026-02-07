import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Benefits,
  Pricing,
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
        <Benefits />
        <Pricing />
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
