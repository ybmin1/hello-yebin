import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  let handleClick: jest.Mock;
  beforeEach(() => {
    handleClick = jest.fn();
  });

  test("renders with button with correct text", () => {
    render(<Button onClick={handleClick}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    render(<Button onClick={handleClick}>Click Test</Button>);
    const buttonElement = screen.getByText("Click Test");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
