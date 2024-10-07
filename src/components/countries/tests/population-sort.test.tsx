// src/components/countries/tests/population-sort.test.tsx
import React from 'react';
import PopulationSort from '../population-sort'; // Adjust the import based on your folder structure
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers

describe('PopulationSort Component', () => {
  const mockSetSort = jest.fn(); // Mock the setSort function

  beforeEach(() => {
    mockSetSort.mockClear(); // Clear mock after each test
  });

  it('renders sorting options correctly', () => {
    render(<PopulationSort sort="ascending" setSort={mockSetSort} />);

    fireEvent.click(screen.getByRole('combobox')); // Open the select dropdown

    // Check if sorting options are displayed
    const ascendingOption = screen.getByText('Ascending');
    const descendingOption = screen.getByText('Descending');

    expect(ascendingOption).toBeInTheDocument();
    expect(descendingOption).toBeInTheDocument();
  });

  it('calls setSort when a new sort order is selected', () => {
    render(<PopulationSort sort="ascending" setSort={mockSetSort} />);

    fireEvent.click(screen.getByRole('combobox')); // Open the select dropdown
    fireEvent.click(screen.getByText('Descending')); // Select "Descending"

    expect(mockSetSort).toHaveBeenCalledWith('descending');
  });

  
});
