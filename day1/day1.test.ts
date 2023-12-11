import { describe, expect, it } from "vitest";
import { calculateFinalCalibration, getValueFromLine } from "./day1.js";
import { readFile } from "node:fs/promises";

const TEST_INPUT_1_PATH = "day1/inputs/test_input_1.txt";
const TEST_INPUT_1_SOLUTION = 142;

const MAIN_INPUT_PATH = "day1/inputs/input.txt";
const MAIN_INPUT_SOLUTION = 55130;

describe("get value from line with no words", () => {
  it("adds the first and last digit when there are two digits", () => {
    expect(getValueFromLine("ak1kjf8")).toEqual(18);
  });

  it("adds the first and last digit when there more than two digits", () => {
    expect(getValueFromLine("lf9bjj8dja0")).toEqual(90);
  });

  it("uses the digit for both places when there is only one", () => {
    expect(getValueFromLine("kfgho5mjpxv")).toEqual(55);
  });

  it("throws an error if there are no numbers in a line", () => {
    expect(() => getValueFromLine("skgfjfg")).toThrow();
  });

  it("ignores spelled words if not enabled", () => {
    expect(getValueFromLine("mfonekasd2k4ksdfnine")).toEqual(24);
  });
});

describe("calculate full document", () => {
  it("fails if an empty input is provided", () => {
    expect(() => calculateFinalCalibration("")).toThrow();
  });

  it("calculates the final figure based on the part 1 example", async () => {
    const document = (await readFile(TEST_INPUT_1_PATH)).toString();
    expect(calculateFinalCalibration(document)).toEqual(TEST_INPUT_1_SOLUTION);
  });
});

describe("complete the challenge", () => {
  it("completes part 1", async () => {
    const document = (await readFile(MAIN_INPUT_PATH)).toString();
    expect(calculateFinalCalibration(document)).toEqual(MAIN_INPUT_SOLUTION);
  });
});
