import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

let user: User;

describe("UserAccount", () => {
  it("should not have button if user.isAdmin is false", () => {
    // Arrange
    user = {
      id: 1,
      name: "Max",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);

    const sc = screen.queryByRole("button");
    expect(sc).not.toBeInTheDocument();
  });

  it("has names(Name: )", () => {
    user = {
      id: 1,
      name: "Max",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);

    const sc = screen.getByText(user.name);
    expect(sc).toBeInTheDocument();
  });
});
