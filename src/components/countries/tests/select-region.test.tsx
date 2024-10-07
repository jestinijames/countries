import SelectRegion from "@/components/countries/select-region";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SelectRegion Component", () => {
  const mockSetRegion = jest.fn(); // Mock the setRegion function

  beforeEach(() => {
    mockSetRegion.mockClear(); // Clear mock after each test
  });

  it("renders all region options correctly", () => {
    render(<SelectRegion region="All" setRegion={mockSetRegion} />);

    fireEvent.click(screen.getByRole("combobox")); // Open the select dropdown

    // Check if all region options are displayed
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(6); // All, Africa, Americas, Asia, Europe, Oceania
    expect(options.map((option) => option.textContent)).toEqual([
      "All",
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ]);
  });

  it("calls setRegion when a new region is selected", () => {
    render(<SelectRegion region="All" setRegion={mockSetRegion} />);

    fireEvent.click(screen.getByRole("combobox")); // Open the select dropdown
    fireEvent.click(screen.getByText("Asia")); // Select "Asia"

    expect(mockSetRegion).toHaveBeenCalledWith("Asia");
  });

  it("shows the correct selected value", () => {
    render(<SelectRegion region="Europe" setRegion={mockSetRegion} />);

    expect(screen.getByRole("combobox")).toHaveTextContent("Europe");
  });
});
