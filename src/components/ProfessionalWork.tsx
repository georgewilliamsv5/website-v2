/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const experience = [
  {
    imgSrc: "/images/amberflo-io.svg",
    title: "Owned the Event Metering and Operations Infrastructure",
    tags: [
      "Microservices",
      "SRE",
      "DevOps",
      "Rest APIs",
      "Java",
      "Guice",
      "Gradle",
      "CI/CD",
      "GitHub Actions",
    ],
    projectLink: "https://www.amberflo.io/",
  },
  {
    imgSrc: "/images/alteryx_logo.svg",
    title: "Owned the AIS Product Suite",
    tags: [
      "Python",
      "React",
      "TypeScript",
      "GitLab",
      "numpy",
      "pandas",
      "scikit-learn",
    ],
    projectLink: "https://www.amberflo.io/",
  },
];

const ProfessionalWork = () => {
  return (
    <section id="professional-work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Professional Work</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {experience.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalWork;
