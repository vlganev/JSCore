let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let lookupChar = require("../03. Char Lookup");

describe("lookupChar(char, index)", function () {
    it("with a non-string first parameter, should return undefined", function () {
        expect(lookupChar(13, 0)).to.equal(undefined, "Function did not return the correct result!");
    });
    it("with a non-string second parameter, should return undefined", function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, "Function did not return the correct result!");
    });
    it("with a floating point number second parameter, should return undefined", function () {
        expect(lookupChar('pesho', 3.12)).to.equal(undefined, "Function did not return the correct result!");
    });
    it("with an incorrect index value, should return incorrect index", function () {
        expect(lookupChar('gosho', 13)).to.equal('Incorrect index', "Function did not return the correct result!");
    });
    it("with a negative index value, should return incorrect index", function () {
        expect(lookupChar('gosho', -1)).to.equal('Incorrect index', "Function did not return the correct result!");
    });
    it("with an index value equal to the string length, should return incorrect index", function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', "Function did not return the correct result!");
    });

    it("with correct parameters, should return correct index", function () {
        expect(lookupChar('pesho', 0)).to.equal('p', "Function returned the correct result!");
    });
    it("with correct parameters, should return correct index", function () {
        expect(lookupChar('georgi', 3)).to.equal('r', "Function returned the correct result!");
    });
});