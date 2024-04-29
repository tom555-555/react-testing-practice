import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);

    const sc = screen.queryByRole("listitem");
    expect(sc).not.toBeInTheDocument();
  });

  it("should have correct user url on each anchor link", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Max",
        isAdmin: false,
      },
      {
        id: 2,
        name: "John",
        isAdmin: false,
      },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
