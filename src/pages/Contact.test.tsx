import { render, screen } from "@testing-library/react";

import Contact from "./Contact";

jest.mock("../components/EmailForm", () => () => (
  <div data-testid="email-form" />
));

describe("Contact Component", () => {
  test("renders the component without crashing", () => {
    render(<Contact />);
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  test("renders the correct email adress", () => {
    render(<Contact />);
    expect(screen.getByText("yebin.min1@gmail.com")).toBeInTheDocument();
  });

  test("renders LinkedIn link with correct href", () => {
    render(<Contact />);
    const linkedInLink = screen.getByText(
      "https://www.linkedin.com/in/yebinmin"
    );
    expect(linkedInLink);
    expect(linkedInLink.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/yebinmin"
    );
    expect(linkedInLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  test("renders GitHub link with correct href", () => {
    render(<Contact />);
    const gitHubLink = screen.getByText("https://github.com/ybmin1");
    expect(gitHubLink);
    expect(gitHubLink.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/ybmin1"
    );
    expect(gitHubLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  test("renders EmailForm component", () => {
    render(<Contact />);
    expect(screen.getByTestId("email-form")).toBeInTheDocument();
  });
});
