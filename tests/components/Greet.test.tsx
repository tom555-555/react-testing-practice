import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name when nae is provided", () => {
    render(<Greet />);

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Login/i);
  });
});
