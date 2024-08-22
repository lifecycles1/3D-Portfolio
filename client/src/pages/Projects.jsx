import { Link } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Feel free to explore the codebase.</p>
      </div>
      <div className="my-20">
        <VerticalTimeline>
          {projects.map((project) => (
            <VerticalTimelineElement
              key={project.name}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={project.iconUrl} alt={project.name} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
              iconStyle={{ background: project.iconBg }}
              contentStyle={{
                borderBottom: "6px",
                borderStyle: "solid",
                borderBottomColor: project.borderBottomColor,
                boxShadow: "none",
              }}
            >
              <div key={project.name}>
                <div className="block-container w-12 h-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                  <p className="mt-2 font-poppins text-slate-500">{project.description}</p>
                  <div className="flex space-x-10">
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link to={project.github_link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                        GitHub Repository
                      </Link>
                    </div>
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      {project.live_link ? (
                        <Link to={project.live_link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                          Live Link
                        </Link>
                      ) : (
                        <span className="font-semibold text-gray-500 cursor-not-allowed">Live Link</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
