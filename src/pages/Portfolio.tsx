import { BsGithub, BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCallback, useState } from "react";

import plantourImg from "../img/plantour.png";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  role: string;
  stack: string;
  longDescription: string;
  liveUrl: string;
  githubUrl: string;
}
interface TextContent {
  portfolio: string;
  featuredProjects: string;
  role: string;
  frontendStack: string;
  viewOnline: string;
  viewSource: string;
}

const projects: ProjectData[] = [
  {
    id: "plantour",
    title: "Plantour",
    description: "A plant discovery app for users to explore local flora",
    image: plantourImg,
    role: "Independently handling front-end development.",
    stack: "JavaScript, React, Recoil, Styled-Components",
    longDescription:
      "A plant discovery app for users to explore local flora, complete missions, and share findings on an interactive map.",
    liveUrl: "https://plantour.site",
    githubUrl: "https://github.com/Plantour/frontend",
  },
  {
    id: "project2",
    title: "Project 2",
    description: "Project 2 Description",
    image: plantourImg,
    role: "project 2 role",
    stack: "project 2 stack",
    longDescription: "project 2 long description",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "project3",
    title: "Project 3",
    description: "Project 3 Description",
    image: plantourImg,
    role: "project 3 role",
    stack: "project 3 stack",
    longDescription: "project 3 long description",
    liveUrl: "",
    githubUrl: "",
  },
];
const textContent: TextContent = {
  portfolio: "Portfolio",
  featuredProjects: "Featured Projects",
  role: "Role: ",
  frontendStack: "Frontend Stack: ",
  viewOnline: "View Online",
  viewSource: "View Source",
};

function Portfolio() {
  const [curProjectId, setCurProjectId] = useState<string | null>(null);
  const [projectDetailOpened, setProjectDetailOpened] =
    useState<boolean>(false);

  const handleCloseClick = useCallback(() => {
    setProjectDetailOpened(false);
    setCurProjectId(null);
  }, []);
  const handleDotsClick = useCallback((projectId: string) => {
    setProjectDetailOpened(true);
    setCurProjectId(projectId);
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center pt-[60px] px-[30px] lg:px-[80px] xl:px-[120px] bg-black text-white transform transition-all duration-[580ms] ease-in-out">
      <div className="relative">
        <svg>
          <defs>
            <mask id="mask">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                className="text-6xl font-bold fill-white"
              >
                {textContent.portfolio}
              </text>
            </mask>
          </defs>
          <foreignObject width="100%" height="100%" mask="url(#mask)">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </foreignObject>
        </svg>
      </div>
      <h2 className="flex justify-center items-center w-full h-[100px] text-2xl font-bold">
        {textContent.featuredProjects}
      </h2>
      {/* slide effect will be updated*/}
      <div className="flex items-center w-full gap-8">
        <IoIosArrowBack className="text-4xl" />
        {/*project card main*/}
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-start items-center w-1/3 h-[350px] gap-4 border-2 rounded-3xl border-white hover:border-gray-400 hover:shadow-[6px_6px_0_0_rgba(156,163,175,1)] overflow-hidden relative transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col gap-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[230px] object-cover"
              />
              <div className="flex flex-col p-2 gap-2">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-l font-bold">{project.title}</h3>
                  <BsThreeDotsVertical
                    onClick={() => handleDotsClick(project.id)}
                    className="text-xl cursor-pointer"
                  />
                </div>
                <p>{project.description}</p>
              </div>
            </div>
            {/*Project card detail*/}
            <div
              className={`flex flex-col absolute inset-0 bg-white text-black origin-bottom transform transition-transform duration-500 ease-out
              ${
                projectDetailOpened && project.id === curProjectId
                  ? "scale-y-100"
                  : "scale-y-0"
              }
            `}
            >
              <div className="flex justify-end w-full p-1">
                <IoClose
                  onClick={handleCloseClick}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-bold">{textContent.role}</span>
                  {project.role}
                </p>
                <p>
                  <span className="font-bold">{textContent.frontendStack}</span>
                  {project.stack}
                </p>
                <p>{project.longDescription}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0">
                <hr />
                <div className="flex justify-center text-2xl text-white p-2 gap-4">
                  <div className="relative group">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white"
                    >
                      <div className="bg-gray-500 rounded-full p-2 shadow-[0_2px_9px_0_gray] hover:shadow-[0_2px_8px_1px_gray] cursor-pointer">
                        <FiExternalLink />
                      </div>
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {textContent.viewOnline}
                    </div>
                  </div>
                  <div className="relative group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white"
                    >
                      <div className="bg-gray-500 rounded-full p-2 shadow-[0_2px_9px_0_gray] hover:shadow-[0_2px_8px_1px_gray] cursor-pointer">
                        <BsGithub />
                      </div>
                    </a>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {textContent.viewSource}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <IoIosArrowForward className="text-4xl" />
      </div>
    </div>
  );
}

export default Portfolio;
