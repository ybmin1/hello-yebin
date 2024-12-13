import { useEffect, useState } from "react";

import BackgroundAnimationEffect from "../components/BackgroundAnimationEffect";

const textContent = {
  hello: "Hello,",
  iAm: "I'm",
  button: "Work with me",
  myApproach: "My approach",
  userCenteredWeb: "User-Centred Web",
  myApproachDesc: `My approach is to create a web experience where users want to stay. I believe a good website makes users feel comfortable and at ease, while also offering fun aspects to capture their attention. To achieve this, I focus on building efficient and trendy websites by deepening my understanding of programming languages, writing clean code, and staying updated with new technologies.`,
};
const words = [
  { text: " Yebin.", color: "text-green-500" },
  { text: " a Web Developer.", color: "text-purple-500" },
];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState<
    "enter" | "active" | "exit"
  >("enter");

  useEffect(() => {
    const rotateText = () => {
      // Enter animation for 900ms (from 0 to 900ms)
      setAnimationState("enter");

      // Active state for 3200ms (from 900ms to 4100ms)
      const activeTimeout = setTimeout(() => {
        setAnimationState("active");
      }, 900);

      // Exit animation for 900ms (from 4100ms to 5000ms)
      const exitTimeout = setTimeout(() => {
        setAnimationState("exit");
      }, 4100);

      // Change word
      const rotateTimeout = setTimeout(() => {
        setCurrentWordIndex((prev) =>
          prev === words.length - 1 ? 0 : prev + 1
        );
        setAnimationState("enter");
      }, 5000);

      return () => {
        clearTimeout(activeTimeout);
        clearTimeout(exitTimeout);
        clearTimeout(rotateTimeout);
      };
    };

    const intervalId = setInterval(rotateText, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const renderLetters = (
    word: string,
    animationState: "enter" | "active" | "exit"
  ) => {
    return word.split("").map((letter, index) => {
      const calculateLetterDelay = (index / (word.length - 1)) * 520;

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
        <div className="h-[600px] flex flex-col justify-center items-start p-[100px]">
          <h1 className="text-7xl font-bold pb-[10px]">{textContent.hello}</h1>
          <div className="inline-flex">
            <h1 className="relative inline-block text-7xl font-bold pb-[15px]">
              <span>{textContent.iAm}</span>
              <span className="relative">
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
              </span>
            </h1>
          </div>
          <button
            className="my-[30px] inline-block bg-black border-2 border-white rounded-[30px] shadow-[4px_4px_0_0_white] text-white font-semibold text-[18px] px-[20px] text-center select-none touch-manipulation focus:outline-none focus-visible:outline-none active:shadow-[2px_2px_0_0_white] active:transform active:translate-x-[2px] active:translate-y-[2px] relative overflow-hidden group
          "
          >
            <span className="relative z-20">{textContent.button}</span>
            <span className="absolute -left-[110px] -top-[50px] w-[50px] h-[200px] bg-white opacity-30 rotate-[35deg] -z-100 transition-all duration-550 ease-cubic-bezier group-hover:left-full"></span>
          </button>
        </div>
        <div className="h-[600px] flex justify-end items-start p-[100px]">
          <div className="w-1/2">
            <h2 className="mb-[50px] text-5xl font-bold">
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
