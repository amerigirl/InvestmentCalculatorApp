import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

test("renders the component", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Investment Calculator/i); 
  expect(headerElement).toBeInTheDocument();
});
