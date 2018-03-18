const StringBuilder = require('../02. String Builder');
const expect = require('chai').expect;

describe("StringBuilder Tests", function() {
    let builder;
    beforeEach(function () {
        builder = new StringBuilder('test');
    });

    it("should check all methods", function() {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true);
    });


    it("should return the same string", function() {
        expect(builder.toString()).to.be.equal('test');
    });

    it("should return the an empty string", function() {
        builder = new StringBuilder();
        expect(builder.toString()).to.be.equal('');
    });

    it("should return an error", function() {
        expect(() => {builder = new StringBuilder(5)}).to.throw(TypeError);
    });

    it("append test", function() {
        builder.append(' function');
        expect(builder._stringArray.length).to.be.equal(13);
        expect(builder.toString()).to.be.equal('test function');
    });

    it("append error", function() {
        expect(() => {builder.append({})}).to.throw(TypeError);
    });

    it("prepend test", function() {
        builder.prepend('function ');
        expect(builder._stringArray.length).to.be.equal(13);
        expect(builder.toString()).to.be.equal('function test');
    });

    it("prepend error", function() {
        expect(() => {builder.prepend(10)}).to.throw(TypeError);
    });

    it("insertAt test", function() {
        builder.insertAt('ss', 1);
        expect(builder._stringArray.length).to.be.equal(6);
        expect(builder.toString()).to.be.equal('tssest');
    });

    it("insertAt test", function() {
        builder.insertAt('ss', 1);
        expect(builder._stringArray.length).to.be.equal(6);
        expect(builder.toString()).to.be.equal('tssest');
    });

    it("insertAt error", function() {
        expect(() => {builder.insertAt([], 2)}).to.throw(TypeError)
    });

    it("remove test", function() {
        builder.remove(1, 2);
        expect(builder._stringArray.length).to.be.equal(2);
        expect(builder.toString()).to.be.equal('tt');
    });
});
