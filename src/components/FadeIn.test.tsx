import { render } from "@testing-library/react";

import FadeIn from "./FadeIn";

jest.mock("../hooks/useIntersectionObserver", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

import useIntersectionObserver from "../hooks/useIntersectionObserver";

describe("FadeIn Component", () => {
  test("applies invisible styles when not in viewport", () => {
    const mockRef = jest.fn();
    (useIntersectionObserver as jest.Mock).mockReturnValue([mockRef, false]);
    const { container } = render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>
    );
    const fadeInDiv = container.firstChild as HTMLElement;
    expect(fadeInDiv).toHaveClass("opacity-0");
    expect(fadeInDiv).toHaveClass("scale-75");
  });

  test("applies visible styles when in viewport", () => {
    const mockRef = jest.fn();
    (useIntersectionObserver as jest.Mock).mockReturnValue([mockRef, true]);
    const { container } = render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>
    );
    const fadeInDiv = container.firstChild as HTMLElement;
    expect(fadeInDiv).toHaveClass("opacity-100");
    expect(fadeInDiv).toHaveClass("scale-100");
  });

  test("references element with the hook ref", () => {
    const mockRef = jest.fn();
    (useIntersectionObserver as jest.Mock).mockReturnValue([mockRef, false]);
    render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>
    );
    expect(useIntersectionObserver).toHaveBeenCalled();
  });
});
