import { render } from "@testing-library/react";
import { List } from "./List";

describe("List component", () => {
  const repositories = [
    {
      id: 1,
      full_name: "Repository 1",
      description: "Description 1",
    },
    {
      id: 2,
      full_name: "Repository 2",
      description: "Description 2",
    },
  ];

  it("renders a loading message if the 'loading' prop is true", () => {
    const { getByText } = render(<List repositories={[]} loading={true} />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("renders a ListGroup with the correct items if the 'loading' prop is false", () => {
    const { getByText } = render(<List repositories={repositories} loading={false} />);
    expect(getByText("Repository 1")).toBeTruthy();
    expect(getByText("Description 1")).toBeTruthy();
    expect(getByText("Repository 2")).toBeTruthy();
    expect(getByText("Description 2")).toBeTruthy();
  });

  it("renders an empty list if the 'repositories' prop is an empty array", () => {
    const { queryByRole } = render(<List repositories={[]} loading={false} />);
    expect(queryByRole("list")).toBeNull();
  });
});
