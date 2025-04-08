import { fireEvent, render, screen } from "@testing-library/react";

import Portfolio from "./Portfolio";

jest.mock("react-icons/bs", () => ({
  BsGithub: () => <div data-testid="github-icon">GithubIcon</div>,
  BsThreeDotsVertical: () => <div data-testid="dots-icon">DotsIcon</div>,
}));

jest.mock("react-icons/io5", () => ({
  IoClose: () => <div data-testid="close-icon">CloseIcon</div>,
}));

describe("Portfolio Component", () => {
  test("renders featured projects heading", () => {
    render(<Portfolio />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  test("renders project cards", () => {
    render(<Portfolio />);
    expect(screen.getByText("Plantour")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  test("project detail opens when dots are clicked", () => {
    render(<Portfolio />);
    const projectDetailContainer = screen
      .getByText("Independently handling front-end development.")
      .closest("div[class*='absolute']");
    expect(projectDetailContainer).toHaveClass("scale-y-0");
    const dotsIcon = screen.getAllByTestId("dots-icon");
    fireEvent.click(dotsIcon[0]);
    expect(
      screen.getByText("Independently handling front-end development.")
    ).toBeInTheDocument();
  });

  test("project detail closes when close icon is clicked", () => {
    render(<Portfolio />);
    const dotsIcon = screen.getAllByTestId("dots-icon");
    fireEvent.click(dotsIcon[0]);
    expect(
      screen.getByText("Independently handling front-end development.")
    ).toBeVisible();
    const closeIcon = screen.getAllByTestId("close-icon");
    fireEvent.click(closeIcon[0]);
    const projectDetailContainer = screen
      .getByText("Independently handling front-end development.")
      .closest("div[class*='absolute']");
    expect(projectDetailContainer).toHaveClass("scale-y-0");
  });
});
