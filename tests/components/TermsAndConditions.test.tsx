import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe("TermsAndConditions", () => {
  it("should render with correct text and initial state", () => {
    1;
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeInTheDocument();
    // expect(button).toHaveAttribute("disabled", true);
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is clicked", async () => {
    const user = userEvent.setup();

    /**
     * Input
     */
    // Arrange
    render(<TermsAndConditions />);

    // Act
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    // Assert
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

    /**
     * Button
     */
    // Arrange

    // Act
    const button = screen.getByRole("button", { name: /Submit/i });

    // Assert
    expect(button).toBeEnabled();
  });
});
