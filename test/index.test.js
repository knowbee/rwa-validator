const { isNationalId, isPhoneNumber } = require("../index");
const chai = require("chai");
const expect = chai.expect;

describe("rwa-validator", () => {
  describe("validating national id numbers", () => {
    it("should return true testing 1199972222000040", () => {
      expect(isNationalId("1199972222000040")).to.be.true;
    });
    it("should return false testing 1189972222000040", () => {
      expect(isNationalId("1189972222000040")).to.be.false;
    });
    it("should return false testing 1219972222000040", () => {
      expect(isNationalId("1219972222000040")).to.be.false;
    });
    it("should return false testing 1201772222000040", () => {
      expect(isNationalId("1201772222000040")).to.be.false;
    });
    it("should return true testing 1199672222000040", () => {
      expect(isNationalId("1199672222000040")).to.be.true;
    });
    it("should return false testing 11996722220000404", () => {
      expect(isNationalId("11996722220000404")).to.be.false;
    });
    it("should return false testing 119967222200004", () => {
      expect(isNationalId("119967222200004")).to.be.false;
    });
    it("should return error testing 1199672222000040 as number", () => {
      expect(function() {
        isNationalId(1199672222000040);
      }).to.throw("Input should be string");
    });
    it("should return error if nothing was given", () => {
      expect(function() {
        isNationalId();
      }).to.throw("Input should be string");
    });
  });

  describe("validating phone numbers", () => {
    it("should return true testing 0788854444", () => {
      expect(isPhoneNumber("0788854444")).to.be.true;
    });
    it("should return false testing 078885444", () => {
      expect(isPhoneNumber("078885444")).to.be.false;
    });
    it("should return false testing 0778854444", () => {
      expect(isPhoneNumber("0778854444")).to.be.false;
    });
    it("should return true testing 0738854444", () => {
      expect(isPhoneNumber("0738854444")).to.be.true;
    });
    it("should return false if nothing was given", () => {
      expect(function() {
        isPhoneNumber();
      }).to.throw("Input should be string");
    });
    it("should return error testing 0738854444 given as number", () => {
      expect(function() {
        isPhoneNumber(0738854444);
      }).to.throw("Input should be string");
    });
  });
});
