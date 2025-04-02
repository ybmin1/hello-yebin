import { beforeEach } from "node:test";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import About from "./About";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../hooks/useIntersectionObserver", () => ({
  __esModule: true,
  default: () => {
    const ref = { current: null };
    const isVisible = true;
    return [ref, isVisible];
  },
}));

describe("About component", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  test('navigates to contact page when "Contact Me" is clicked', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const contactMeButton = screen.getByText("Contact Me");
    fireEvent.click(contactMeButton);
    expect(mockNavigate).toHaveBeenCalledWith("/contact");
  });

  test("renders correct number of skill categories", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Frameworks & Libraries")).toBeInTheDocument();
    expect(screen.getByText("Tools & Platforms")).toBeInTheDocument();
  });
});
