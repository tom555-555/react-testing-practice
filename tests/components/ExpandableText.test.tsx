import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  it("should render the full text if ti is less than 255 characters", () => {
    // Arrange
    const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet ipsa nulla earum nostrum quae ratione. Beatae quibusdam ";
    render(<ExpandableText text={txt} />);

    // Act
    const article = screen.getByRole("article");
    const button = screen.queryByRole("button");
    const text = screen.getByText(txt, { trim: false, collapseWhitespace: false });

    // Assert
    expect(article).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should render truncate paragraph if it is longer than 255 words", async () => {
    // Arrange
    const txt = "a".repeat(256);
    render(<ExpandableText text={txt} />);

    // Act
    const truncatedText = txt.substring(0, 255);
    const article = screen.getByText(truncatedText + "...");
    const button = screen.getByRole("button");

    // Assert

    expect(article).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);

    /**
     * check if the expanding works
     */
    const ue = userEvent.setup();

    await ue.click(button);

    expect(button).toHaveTextContent(/less/i);
  });
});
