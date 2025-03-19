import { BiLogoPhp, BiLogoTypescript } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaGitAlt } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { SiJest, SiJira, SiMysql } from "react-icons/si";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button.tsx";
import DownloadCV from "../components/DownloadCV.tsx";
import FadeIn from "../components/FadeIn.tsx";
import profilePhoto from "../img/profile-photo.png";
import profilePhotoBg from "../img/profile-photo-bg.png";

interface dataSkills {
  title: string;
  skills: Array<{ name: string; icon: React.ComponentType }>;
}
interface data {
  role?: string;
  organisationName: string;
  period: string;
  location: string;
  content: string;
}

const dataSkills: dataSkills[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "HTML", icon: IoLogoHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "php", icon: BiLogoPhp },
      { name: "Python", icon: IoLogoPython },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: IoLogoReact },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Node.js", icon: IoLogoNodejs },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: IoLogoGithub },
      { name: "Jira", icon: SiJira },
      { name: "Figma", icon: FaFigma },
      { name: "MySQL", icon: SiMysql },
    ],
  },
];
const dataExperience: data[] = [
  {
    role: "Teaching Assistant",
    organisationName: "Code Your Future",
    period: "Dec 2024 - Present",
    location: "UK",
    content: "Volunteer to assist in teaching coding to minorities",
  },
  {
    role: "Volunteer",
    organisationName: "East London Water Works Park",
    period: "Nov 2024 - Present",
    location: "UK",
    content: "Redesign and update the website",
  },
  {
    role: "Collaborator",
    organisationName: "TechSisters",
    period: "Mar 2024 - Present",
    location: "UK",
    content:
      "Developer study group exploring new technologies and enhancing coding skills",
  },
  {
    role: "Web Dev Student",
    organisationName: "Super Coding (Bootcamp)",
    period: "Jan 2024 - Jun 2024",
    location: "UK/South Korea",
    content:
      "Learned web technologies and collaborated with developers on team projects",
  },
  {
    role: "Entrepreneur",
    organisationName: "Hebe Co., Ltd",
    period: "May 2018 - Dec 2023",
    location: "UK/South Korea",
    content: "Established eCommerce company and managed online market",
  },
  {
    role: "E-Commerce Specialist",
    organisationName: "Purplish",
    period: "Jan 2017 - Mar 2018",
    location: "UK",
    content:
      "Managed the retail website, including listings, marketing, and content creation",
  },
  {
    role: "Product Coordinator",
    organisationName: "Hanse Co., Ltd",
    period: "May 2011 - Oct 2013",
    location: "South Korea",
    content: "Ensured on-time garment delivery from development to production",
  },
];
const dataEducation: data[] = [
  {
    organisationName: "Super Coding (Bootcamp)",
    period: "Jan 2024 - Jun 2024",
    location: "UK/South Korea",
    content: "Web Development Training",
  },
  {
    organisationName: "Code First Girls",
    period: "Oct 2023 - Nov 2023",
    location: "UK",
    content: "Mook Sprint, Solving Problems with Python",
  },
  {
    organisationName: "University of Manchester",
    period: "Sep 2015 - Dec 2016",
    location: "UK",
    content: "International Fashion Retailing, Multichannel Marketing (MSc)",
  },
  {
    organisationName: "Ewha Womans University",
    period: "May 2006 - Aug 2011",
    location: "South Korea",
    content: "Clothing & Textiles, Double Majored in Economics (BA)",
  },
];
const textContent = {
  aboutMe: "About Me",
  name: "Yebin Min",
  region: "Epsom, Surrey",
  visaFirstLine: "Eligible to work in the UK",
  visaSecondLine: "without sponsorship",
  smScreenVisaFirstLine: "Eligible to work",
  smScreenVisaSecondLine: "in the UK",
  skills: "Skills",
  experience: "Experience",
  education: "Education",
  contactMe: "Contact Me",
};

function About() {
  const navigate = useNavigate();
  const onClickContactMe = () => {
    navigate("/contact");
  };
  const renderedSkills = useMemo(() => {
    return dataSkills.map((category) => (
      <div key={category.title} className="py-4 text-left">
        <h3 className="py-3 text-xl">{category.title}</h3>
        <FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-5">
            {category.skills.map((skills) => (
              <div
                key={skills.name}
                className="flex flex-col items-center gap-0"
              >
                <div
                  className="flex justify-center items-center w-20 h-20
               bg-black border-2 border-white rounded-[20px] shadow-[4px_4px_0_0_white]"
                >
                  <skills.icon className="w-[65%] h-[65%]" />
                </div>
                <span className="mb-2">{skills.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    ));
  }, []);
  const renderedExpAndEdu = (data: data[]) => {
    return data.map((item, index) => (
      <div
        key={item.organisationName}
        className={`flex gap-4 py-3 ${data.length - 1 !== index && "border-b"}`}
      >
        <div className="w-1/3 text-right">
          {item.role ? (
            <div className="font-semibold">{item.role}</div>
          ) : (
            <br />
          )}
          <div>{item.period}</div>
        </div>
        <div className="w-2/3 text-left">
          <div className="flex justify-between">
            <span className="font-semibold">{item.organisationName}</span>
            <span>{item.location}</span>
          </div>
          <div>{item.content}</div>
        </div>
      </div>
    ));
  };
  const renderedExperience = useMemo(
    () => renderedExpAndEdu(dataExperience),
    []
  );
  const renderedEducation = useMemo(() => renderedExpAndEdu(dataEducation), []);

  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center pt-[60px] px-[30px] lg:px-[150px] bg-black text-white transform transition-all duration-[580ms] ease-in-out">
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
                {textContent.aboutMe}
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
      <div className="flex flex-col w-full h-[260px] sm:h-[330px] md:h-[400px] min-w-[300px] border-b border-gray-300 relative transition-all duration-300 ease-in-out">
        <div className="text-sm sm:text-xl font-bold absolute top-0 sm:top-[80px] left-0 sm:left-1/2 sm:transform sm:-translate-x-[200px]">
          {textContent.name}
        </div>
        <div className="text-sm sm:text-xl font-bold absolute top-[30px] sm:top-[170px] left-0 sm:left-1/2 sm:transform sm:-translate-x-[260px]">
          {textContent.region}
        </div>
        {/* rendered text on small screen */}
        <div className="block sm:hidden text-sm font-bold absolute top-[60px] left-0">
          {textContent.smScreenVisaFirstLine}
          <br />
          {textContent.smScreenVisaSecondLine}
        </div>
        {/* rendered text on bigger screen */}
        <div className="hidden sm:block text-xl font-bold absolute top-[60px] sm:top-[110px] left-0 sm:left-1/2 sm:transform sm:translate-x-[120px]">
          {textContent.visaFirstLine}
          <br />
          {textContent.visaSecondLine}
        </div>
        <img
          alt={"Profile photo Background"}
          src={profilePhotoBg}
          className="min-w-[410px] w-[410px] sm:w-[510px] md:w-[595px] absolute bottom-0 right-[-80px] sm:left-1/2 sm:transform sm:-translate-x-1/2 transition-all duration-300 ease-in-out"
        />
        <img
          alt={"Profile photo of Yebin"}
          src={profilePhoto}
          className="min-w-[380px] w-[380px] sm:w-[470px] md:w-[550px] absolute bottom-0 right-[-55px] sm:left-1/2 sm:transform sm:-translate-x-1/2 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-[300px] sm:w-[485px] xl:w-[600px] min-w-[300px] py-[35px] text-center">
        <h2 className="text-4xl font-bold">{textContent.skills}</h2>
        {renderedSkills}
      </div>
      <div className="flex w-full border-t border-gray-300"></div>
      <FadeIn>
        <div className="flex flex-col md:flex-row w-full min-w-[300px] px-[20px] py-[35px] gap-4">
          <div className="flex flex-col md:w-1/2 px-[25px] py-[45px] border rounded-2xl">
            <h2 className="mb-[30px] text-center text-4xl font-bold">
              {textContent.experience}
            </h2>
            {renderedExperience}
          </div>
          <div className="flex flex-col md:w-1/2 px-[25px] py-[45px] border rounded-2xl">
            <h2 className="mb-[30px] text-center text-4xl font-bold">
              {textContent.education}
            </h2>
            {renderedEducation}
          </div>
        </div>
      </FadeIn>
      <div className="flex w-full border-t border-gray-300"></div>
      <FadeIn>
        <div className="flex pt-[50px] pb-[150px] gap-7">
          <Button onClick={onClickContactMe}>{textContent.contactMe}</Button>
          <DownloadCV />
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
