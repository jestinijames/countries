// src/components/countries/SelectRegion.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import SelectRegion from "./select-region";
import "@testing-library/jest-dom";

describe("SelectRegion Component", () => {
  it("should render with default value and update on selection", () => {
    const setRegion = jest.fn(); // Mock function for setRegion
    const region = "All"; // Default region

    // Render component
    render(<SelectRegion region={region} setRegion={setRegion} />);

    // Check if the default value is rendered
    expect(screen.getByText(/Filter countries by region/i)).toBeInTheDocument();

    // Simulate user opening the select and selecting "Asia"
    fireEvent.click(screen.getByText(/Filter countries by region/i));
    fireEvent.click(screen.getByText("Asia"));

    // Ensure the setRegion function was called with 'Asia'
    expect(setRegion).toHaveBeenCalledWith("Asia");
  });

  it("should display all region options", () => {
    const setRegion = jest.fn();
    const region = "All";

    render(<SelectRegion region={region} setRegion={setRegion} />);

    fireEvent.click(screen.getByText(/Filter countries by region/i));

    // Check if all region options are rendered
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Africa")).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Oceania")).toBeInTheDocument();
  });
});
