const { isNationalId, isPhoneNumber } = require("../index");
const chai = require("chai");
const expect = chai.expect;

describe("rwa-validator", () => {
  describe("validation national id numbers", () => {
    it("should return true", () => {
      expect(isNationalId("1199972222000040")).to.be.true;
    });
    it("should return false", () => {
      expect(isNationalId("1189972222000040")).to.be.false;
    });
    it("should return false", () => {
      expect(isNationalId("1219972222000040")).to.be.false;
    });
    it("should return true", () => {
      expect(isNationalId("1199672222000040")).to.be.true;
    });
  });
});
