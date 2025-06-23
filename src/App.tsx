/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import About from "./components/About";
import Champion from "./components/Champion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfessionalWork from "./components/ProfessionalWork";
import References from "./components/References";
import Skill from "./components/Skill";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Champion />
        <About />
        <Skill />
        <ProfessionalWork />
        <References />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
