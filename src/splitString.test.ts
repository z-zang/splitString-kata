import { splitString } from "./splitString";

describe("test split string function", () => {
  it("should return an array", () => {
    expect(splitString('ab')).toStrictEqual(['ab']);
  });
  it("should split strings longer than 2 characters", () => {
    expect(splitString('abcd')).toStrictEqual(['ab', 'cd']);
    expect(splitString('abcdefgh')).toStrictEqual(['ab', 'cd', 'ef', 'gh']);
  });
  it("should add underscore for string of odd length", () => {
    expect(splitString('abcde')).toStrictEqual(['ab', 'cd', 'e_']);
    expect(splitString('a')).toStrictEqual(['a_']);
  });
});