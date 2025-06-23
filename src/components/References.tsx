/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReferenceCard from "./ReferenceCard";

const references = [
  {
    content:
      "If you are looking for someone who combines technical excellence with a strong sense of ownership and problem-solving, I highly recommend George. He would be a tremendous asset to any team.",
    name: "Talha Aftab",
    imgSrc: "/images/talha.jpg",
    company: "Amberflo",
  },
  {
    content:
      "George is a solid software engineer who isn't afraid to ask relevant questions and dig into problems no one else wants to address.",
    name: "Chris Park",
    imgSrc: "/images/chris.jpg",
    company: "Alteryx",
  },
  {
    content:
      "A great engineer who is able to pick things up quickly and explain things to others simply. Would love to work with George again",
    name: "Dakota O'Dell",
    imgSrc: "/images/dakota-edited.jpg",
    company: "Alteryx",
  },
];

const References = () => {
  {
    /* TODO clean up scrolling for mobile 6/22/2025 */
  }
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
      x: "-150", // slide left 150 px
    });
  });

  return (
    <section id="references" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">References</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {references.map(({ content, name, imgSrc, company }, key) => (
            <ReferenceCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
