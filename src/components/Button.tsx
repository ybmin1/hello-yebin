import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // children은 필수로 받아야 하므로 설정
  onClick: React.MouseEventHandler<HTMLButtonElement>; // onClick은 필수 이벤트 처리기
}

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-block px-[20px] bg-black border-2 border-white rounded-[30px] shadow-[4px_4px_0_0_white] text-white font-semibold text-center select-none touch-manipulation focus:outline-none focus-visible:outline-none active:shadow-[2px_2px_0_0_white] active:transform active:translate-x-[2px] active:translate-y-[2px] relative overflow-hidden group my-[80px] md:my-[30px] text-[15px] md:text-[18px] transition-all duration-300 ease-in-out";
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      <span className="relative z-20">{children}</span>
      <span className="absolute -left-[110px] -top-[50px] w-[50px] h-[200px] bg-white opacity-30 rotate-[35deg] -z-100 transition-all duration-550 ease-cubic-bezier group-hover:left-full"></span>
    </button>
  );
};

export default Button;
