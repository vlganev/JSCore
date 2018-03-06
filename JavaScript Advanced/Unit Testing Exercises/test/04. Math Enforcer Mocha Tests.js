let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let mathEnforcer = require("../04. Math Enforcer");

describe("mathEnforcer(num)", function () {
    describe("addFive()", function () {
        it("with a string (should return undefined)", function () {
            expect(mathEnforcer.addFive('gosho')).to.be.undefined;
        });
        it("with a positive number (should return number +5)", function () {
            expect(mathEnforcer.addFive(4)).to.be.equal(9, 'Add five function didnt work');
        });
        it("with a negative number (should return number +5)", function () {
            expect(mathEnforcer.addFive(-4)).to.be.equal(1, 'Add five function didnt work');
        });
        it("with a floating point number (should return number +5)", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });

    describe("subtractTen(num)", function () {
        it("with a string (should return undefined)", function () {
            expect(mathEnforcer.subtractTen('gosho')).to.be.undefined;
        });
        it("with a positive number (should return number -10)", function () {
            expect(mathEnforcer.subtractTen(14)).to.be.equal(4, 'Subtract ten function didnt work');
        });
        it("with a negative number (should return number -10)", function () {
            expect(mathEnforcer.subtractTen(-4)).to.be.equal(-14, 'Subtract ten function didnt work');
        });
        it("with a floating point number (should return number -10)", function () {
            expect(mathEnforcer.subtractTen(15.14)).to.be.closeTo(5.14, 0.01);
        });
    });

    describe("sum(num1, num2)", function () {
        it("with a string (should return undefined)", function () {
            expect(mathEnforcer.sum('p', 2)).to.be.undefined;
        });
        it("with a string (should return undefined)", function () {
            expect(mathEnforcer.sum(5, 'k')).to.be.undefined;
        });
        it("with a two positive numbers", function () {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10, 'Sum did not return the correct value');
        });
        it("with a two negative numbers", function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10, 'Sum did not return the correct value');
        });
        it("with a two floating point numbers", function () {
            expect(mathEnforcer.sum(5.06, 5.06)).to.be.closeTo(10.12, 0.01);
        });
    });
});