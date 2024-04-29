import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not have any dom if the imageUrls got empty array", () => {
    // Arrange
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    // Act
    // const sc = screen.queryByRole("listitem");

    // Assert
    expect(container).toBeEmptyDOMElement();
  });

  it("should render list items with image tag having image urls", () => {
    // arrange
    const imageUrls: string[] = ["src/assets/react.svg", "url2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    // act
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });

    // assert
  });
});
