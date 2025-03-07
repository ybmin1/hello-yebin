import { useEffect, useState } from "react";

import BackgroundAnimationEffect from "../components/BackgroundAnimationEffect";

const textContent = {
  hello: "Hello,",
  iAm: "I'm ",
  button: "Work with me",
  myApproach: "My approach",
  userCenteredWeb: "User-Centred Web",
  myApproachDesc: `My approach is to create a web experience where users want to stay. I believe a good website makes users feel comfortable and at ease, while also offering fun aspects to capture their attention. To achieve this, I focus on building efficient and trendy websites by deepening my understanding of programming languages, writing clean code, and staying updated with new technologies.`,
};
const words = [
  { text: "Yebin.", color: "text-green-500" },
  { text: "a Web Developer.", color: "text-purple-500" },
];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState<
    "enter" | "active" | "exit"
  >("enter");

  useEffect(() => {
    const rotateText = () => {
      // Enter animation for 500ms (from 0 to 500ms)
      setAnimationState("enter");
      // Active state for 2000ms (from 500ms to 2500ms)
      const activeTimeout = setTimeout(() => {
        setAnimationState("active");
      }, 500);
      // Exit animation for 500ms (from 2500ms to 3000ms)
      const exitTimeout = setTimeout(() => {
        setAnimationState("exit");
      }, 2500);
      // Change word
      const rotateTimeout = setTimeout(() => {
        setCurrentWordIndex((prev) =>
          prev === words.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => {
        clearTimeout(activeTimeout);
        clearTimeout(exitTimeout);
        clearTimeout(rotateTimeout);
      };
    };
    const intervalId = setInterval(rotateText, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const renderLetters = (
    word: string,
    animationState: "enter" | "active" | "exit"
  ) => {
    return word.split("").map((letter, index) => {
      const calculateLetterDelay = (index / (word.length - 1)) * 310;
      return (
        <span
          key={index}
          className={`
            inline-block 
            transform 
            transition-all 
            duration-[580ms] 
            ease-in-out 
            ${
              animationState === "enter"
                ? "translate-y-[-50px] rotate-x-90 opacity-0"
                : ""
            }
            ${
              animationState === "active"
                ? "translate-y-0 rotate-x-0 opacity-100"
                : ""
            }
            ${
              animationState === "exit"
                ? "translate-y-[50px] rotate-x-90 opacity-0"
                : ""
            }
            ${letter === " " ? "whitespace-pre" : "whitespace-normal"}
          `}
          style={{
            transitionDelay: `${calculateLetterDelay}ms`,
            transformOrigin: "center center 25px",
          }}
        >
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="w-screen min-h-screen relative">
      <BackgroundAnimationEffect />
      <div className="absolute inset-0 mt-[60px] text-white">
        <div className="h-[600px] flex flex-col justify-center items-start p-[10px] sm:p-[40px] md:p-[55px] lg:p-[100px] transition-all duration-300 ease-in-out">
          <h1 className="font-bold pb-[10px] text-5xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out">
            {textContent.hello}
          </h1>
          <h1 className="relative inline-block font-bold whitespace-pre text-5xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out">
            <span className="pb-[10px]">{textContent.iAm}</span>
            <div className="relative block md:inline transition-all duration-300 ease-in-out">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute left-0 transition-opacity duration-[400ms] ${
                    currentWordIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className={`inline-flex ${word.color}`}>
                    {renderLetters(word.text, animationState)}
                  </span>
                </span>
              ))}
            </div>
          </h1>
          <button
            className="inline-block px-[20px] bg-black border-2 border-white rounded-[30px] shadow-[4px_4px_0_0_white] text-white font-semibold text-center select-none touch-manipulation focus:outline-none focus-visible:outline-none active:shadow-[2px_2px_0_0_white] active:transform active:translate-x-[2px] active:translate-y-[2px] relative overflow-hidden group my-[80px] md:my-[30px] text-[15px] md:text-[18px] transition-all duration-300 ease-in-out
          "
          >
            <span className="relative z-20">{textContent.button}</span>
            <span className="absolute -left-[110px] -top-[50px] w-[50px] h-[200px] bg-white opacity-30 rotate-[35deg] -z-100 transition-all duration-550 ease-cubic-bezier group-hover:left-full"></span>
          </button>
        </div>
        <div className="h-[600px] flex items-start justify-start sm:justify-end p-[25px] sm:p-[40px] md:p-[55px] lg:p-[100px] transition-all duration-300 ease-in-out">
          <div className="w-full min-w-[350px] sm:w-2/3 md:w-1/2 transition-all duration-300 ease-in-out">
            <h2 className="mb-[50px] font-bold text-4xl md:text-5xl ransition-all duration-300 ease-in-out">
              {textContent.myApproach}
            </h2>
            <h3 className="mb-[10px] text-2xl font-bold">
              {textContent.userCenteredWeb}
            </h3>
            <p className="text-xl">{textContent.myApproachDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
