import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the component", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Investment Calculator/i); // Replace with actual text
  expect(headerElement).toBeInTheDocument();
});
