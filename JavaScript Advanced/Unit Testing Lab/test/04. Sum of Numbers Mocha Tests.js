let expect = require("chai").expect;
let sum = require("../04. Sum of Numbers");

describe('Sum tests', function () {
    it('should return 3 [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3);
    });
    it('should return 0 []', function () {
        expect(sum([])).to.be.equal(0);
    });
    it('should return 1 [1]', function () {
        expect(sum([1])).to.be.equal(1);
    });
    it('should return 5.15 [-1, 3.15, 3]', function () {
        expect(sum([-1, 3.15, 3])).to.be.equal(5.15);
    });
    it('should return NaN [string]', function () {
        expect(sum('test')).to.be.NaN;
    })
});