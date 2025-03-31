import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "./Home";

jest.mock("../components/BackgroundAnimationEffect", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="background-animation" />,
  };
});
jest.mock("pixi.js", () => ({
  Application: jest.fn().mockImplementation(() => ({
    init: jest.fn(),
    destroy: jest.fn(),
  })),
}));
jest.mock("../components/Button", () => {
  return {
    __esModule: true,
    default: ({
      children,
      onClick,
    }: {
      children: React.ReactNode;
      onClick: React.MouseEventHandler<HTMLButtonElement>;
    }) => <button onClick={onClick}>{children}</button>,
  };
});
jest.mock("../components/DownloadCV", () => {
  return {
    __esModule: true,
    default: () => <button>Download CV</button>,
  };
});
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Home Component", () => {
  test("renders home page correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Hello,")).toBeInTheDocument();
    expect(screen.getByText("I'm")).toBeInTheDocument();
    expect(screen.getByText("Work with me")).toBeInTheDocument();
  });

  test("rotates words correctly", () => {
    jest.useFakeTimers();
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const greenTextContainer = screen.getByText("", {
      selector: "span.text-green-500",
    });
    expect(greenTextContainer.textContent).toBe("Yebin.");
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    const purpleTextContainer = screen.getByText("", {
      selector: "span.text-purple-500",
    });
    expect(purpleTextContainer.textContent).toBe("a Web Developer.");
    jest.useRealTimers();
  });

  test('navigates to contact page when "Work with me" is clicked', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const workWithMeButton = screen.getByText(/Work with me/i);
    workWithMeButton.click();
    expect(mockNavigate).toHaveBeenCalledWith("/contact");
  });

  test("displays my approach section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("My approach")).toBeInTheDocument();
    expect(screen.getByText("User-Centred Web")).toBeInTheDocument();
    expect(
      screen.getByText(/My approach is to create a web experience/)
    ).toBeInTheDocument();
  });
});
