import BackgroundAnimationEffect from "../components/BackgroundAnimationEffect";

const textContent = {
  hello: "Hello,",
  iAm: "I'm Yebin.",
  button: "Work with me",
  myApproach: "My approach",
  userCenteredWeb: "User-Centred Web",
  myApproachDesc: `My approach is to create a web experience where users want to
              stay. I believe a good website makes users feel comfortable and at
              ease, while also offering fun aspects to capture their attention.
              To achieve this, I focus on building efficient and trendy websites
              by deepening my understanding of programming languages, writing
              clean code, and staying updated with new technologies.`,
};

function Home() {
  return (
    <div className="w-screen min-h-screen relative">
      <BackgroundAnimationEffect />
      <div className="absolute inset-0 mt-[60px] text-white">
        <div className="w-screen h-[600px] flex flex-col justify-center items-start p-[100px]">
          <h1 className="text-7xl font-bold">
            {textContent.hello} <br /> {textContent.iAm}
          </h1>

          <button className="my-[30px] inline-block bg-black border-2 border-white rounded-[30px] shadow-[4px_4px_0_0_white] text-white font-semibold text-[18px] px-[20px] text-center select-none touch-manipulation focus:outline-none focus-visible:outline-none hover:bg-[#2b2b2b] active:shadow-[2px_2px_0_0_white] active:transform active:translate-x-[2px] active:translate-y-[2px]">
            {" "}
            {textContent.button}{" "}
          </button>
        </div>
        <div className="w-screen h-[600px] flex justify-end items-start p-[100px]">
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
