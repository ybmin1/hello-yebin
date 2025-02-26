import { ReactNode } from "react";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

function FadeIn({ children, className = "" }: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;
