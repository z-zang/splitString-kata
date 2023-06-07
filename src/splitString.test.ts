import { splitString } from "./splitString";

describe("test split string function", () => {
  it("should return an array", () => {
    expect(splitString('ab')).toStrictEqual(['ab']);
  });
  it("should split strings longer than 2 characters", () => {
    expect(splitString('abcd')).toStrictEqual(['ab', 'cd']);
  });

});