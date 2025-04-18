import { ComponentType, SVGProps } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import EmailForm from "../components/EmailForm";

interface TextContent {
  contact: string;
  contactMe: string;
  email: string;
  linkedin: string;
  github: string;
}
interface ContactItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  href?: string;
}

const ContactItem = ({ icon: Icon, text, href }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-2">
      <Icon className="text-2xl" />
      <span>{text}</span>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 visited:text-white"
    >
      {content}
    </a>
  ) : (
    content
  );
};
const textContent: TextContent = {
  contact: "Contact",
  contactMe: "Contact Me",
  email: "yebin.min1@gmail.com",
  linkedin: "https://www.linkedin.com/in/yebinmin",
  github: "https://github.com/ybmin1",
};

function Contact() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-[60px] bg-black text-white gap-2 transition-all duration-300 ease-in-out">
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
                {textContent.contact}
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
      <div className="flex flex-col items-center lg:flex-row justify-center w-full lg:h-[400px] gap-8">
        <div className="w-[500px] lg:w-[350px] h-full bg-gray-200 bg-opacity-20 rounded-md p-3">
          <div className="flex flex-col justify-center h-full gap-2 lg:gap-10 relative">
            <h2 className="text-2xl lg:text-3xl font-bold lg:absolute top-0">
              {textContent.contactMe}
            </h2>
            <ContactItem icon={MdEmail} text={textContent.email} />
            <ContactItem
              icon={FaLinkedin}
              text={textContent.linkedin}
              href={textContent.linkedin}
            />
            <ContactItem
              icon={SiGithub}
              text={textContent.github}
              href={textContent.github}
            />
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}

export default Contact;
