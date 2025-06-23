/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/python-logo-only.svg",
    label: "Python",
    desc: "Backend Services, Scripting",
    url: "https://www.python.org",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Backend Services",
    url: "https://www.oracle.com/java/",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction, Scripting",
    url: "https://www.javascript.com/",
  },
  {
    imgSrc: "/images/aws.svg",
    label: "AWS",
    desc: "Cloud Provider",
    url: "https://aws.amazon.com/",
  },
  {
    imgSrc: "/images/dynamoDB.svg",
    label: "DynamoDB",
    desc: "NoSQL database",
    url: "https://aws.amazon.com/dynamodb/",
  },
  {
    imgSrc: "/images/timestream.svg",
    label: "TimeStream",
    desc: "Time Series Database",
    url: "https://aws.amazon.com/timestream/",
  },
  {
    imgSrc: "/images/athena.svg",
    label: "Athena",
    desc: "Interactive query service",
    url: "https://aws.amazon.com/athena/",
  },
  {
    imgSrc: "/images/github-mark-white.svg",
    label: "GitHub",
    desc: "Source Control",
    url: "https://github.com/georgewilliamsv5",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
    url: "https://react.dev/",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
    url: "https://tailwindcss.com/",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Awesome tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Tools of my trade that I have professional exposure to
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc, url }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              url={url}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
