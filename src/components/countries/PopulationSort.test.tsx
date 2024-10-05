// src/components/countries/PopulationSort.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import PopulationSort from "./population-sort";
import "@testing-library/jest-dom";

describe("PopulationSort Component", () => {
  it("should render with default value and update on selection", () => {
    const setSort = jest.fn(); // Mock function for setSort
    const sort = "ascending"; // Default sort

    // Render component
    render(<PopulationSort sort={sort} setSort={setSort} />);

    // Check if the default value is rendered
    expect(screen.getByText(/Population:/i)).toBeInTheDocument();

    // Simulate user opening the select and selecting "descending"
    fireEvent.click(screen.getByText(/ascending/i)); // Opens the select dropdown
    fireEvent.click(screen.getByText(/descending/i)); // Clicks the "descending" option

    // Ensure the setSort function was called with 'descending'
    expect(setSort).toHaveBeenCalledWith("descending");
  });

  it("should display sort options", () => {
    const setSort = jest.fn();
    const sort = "ascending";

    render(<PopulationSort sort={sort} setSort={setSort} />);

    fireEvent.click(screen.getByText(/ascending/i)); // Opens the select dropdown

    // Check if both ascending and descending options are rendered
    expect(screen.getByText(/ascending/i)).toBeInTheDocument();
    expect(screen.getByText(/descending/i)).toBeInTheDocument();
  });
});
