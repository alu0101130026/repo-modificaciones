import { expect } from "chai";
import "mocha";
import * as fs from "fs";
import { BackpackFileProcessor, DefaultHooks } from "../src/semana9/main.js";
import { FileProcessorHooks } from "../src/semana9/interfaces/fileprocessorhooks.js";

describe("BackpackFileProcessor", () => {
  let fileProcessor: BackpackFileProcessor;

  beforeEach(() => {
    fileProcessor = new BackpackFileProcessor();
  });

  describe("#process()", () => {
    it("should extract benefits and weights from CSV file", () => {
      const filePath = "./tests/testFiles/test.csv";
      const [benefits, weights] = fileProcessor.process(filePath);
      const expectedBenefits = [10, 12, 6];
      const expectedWeights = [5, 8, 3];
      expect(benefits).to.eql(expectedBenefits);
      expect(weights).to.eql(expectedWeights);
    });

    it("should extract benefits and weights from JSON file", () => {
      const filePath = "./tests/testFiles/test.json";
      const [benefits, weights] = fileProcessor.process(filePath);
      const expectedBenefits = [10, 12, 6];
      const expectedWeights = [5, 8, 3];
      expect(benefits).to.eql(expectedBenefits);
      expect(weights).to.eql(expectedWeights);
    });
  });
});

describe("BackpackFileProcessor with Custom Hooks", () => {
  let fileProcessor: BackpackFileProcessor;

  class CustomHooks implements FileProcessorHooks {
    preProcess(fileContent: string): string {
      return fileContent.toUpperCase();
    }

    postProcess(benefits: number[], weights: number[]): void {
      console.log("Custom post-processing:", benefits, weights);
    }
  }

  beforeEach(() => {
    fileProcessor = new BackpackFileProcessor(new CustomHooks());
  });

  describe("#process()", () => {
    it("should extract benefits and weights from CSV file with custom hooks", () => {
      const filePath = "./tests/testFiles/test.csv";
      const [benefits, weights] = fileProcessor.process(filePath);
      const expectedBenefits = [10, 12, 6];
      const expectedWeights = [5, 8, 3];
      expect(benefits).to.eql(expectedBenefits);
      expect(weights).to.eql(expectedWeights);
    });

    /*it("should extract benefits and weights from JSON file with custom hooks", () => {
      const filePath = "./tests/testFiles/test.json";
      const [benefits, weights] = fileProcessor.process(filePath);
      const expectedBenefits = [10, 12, 6];
      const expectedWeights = [5, 8, 3];
      expect(benefits).to.eql(expectedBenefits);
      expect(weights).to.eql(expectedWeights);
    });*/
  });
});
