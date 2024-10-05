import { formatPopulation } from "./utils";

describe("formatPopulation", () => {
  it("formats the population number with commas", () => {
    expect(formatPopulation(1234567)).toBe("1,234,567");
  });

  it("should format population numbers correctly", () => {
    expect(formatPopulation(1000)).toBe("1,000");
    expect(formatPopulation(1000000)).toBe("1,000,000");
    expect(formatPopulation(123456789)).toBe("123,456,789");
    expect(formatPopulation(0)).toBe("0");
  });

  it('returns "0" for zero population', () => {
    expect(formatPopulation(0)).toBe("0");
  });
});
