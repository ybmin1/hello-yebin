import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import DownloadCV from "./DownloadCV";

jest.mock("./Button", () => {
  return ({ children, onClick, className }: any) => (
    <button onClick={onClick} className={className} data-testid="mock-button">
      {children}
    </button>
  );
});

describe("DownloadCV component", () => {
  test("calls the anchor's click() method when the button is clicked", () => {
    render(<DownloadCV />);
    const mockClick = jest.fn();
    const link = document.querySelector("a");
    if (link) {
      link.click = mockClick;
    }
    const button = screen.getByTestId("mock-button");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
