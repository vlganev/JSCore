let expect = require('chai').expect;
let PaymentPackage = require("../02. Payment Package");

describe("paymentPackage Tests", function () {
    describe("constructor name tests", function () {
        it("one parameter for the constructor - number", function () {
            expect(() => {
                payment = new PaymentPackage(5)
            }).to.throw(Error);
        });

        it("one parameter for the constructor - string", function () {
            expect(() => {
                payment = new PaymentPackage('alabala')
            }).to.throw(Error);
        });

        it("empty string for the name", function () {
            expect(() => {
                payment = new PaymentPackage('', 5)
            }).to.throw(Error);
        });

        it("number for the name", function () {
            expect(() => {
                payment = new PaymentPackage(5, 5)
            }).to.throw(Error);
        });

        it("object for the name", function () {
            expect(() => {
                payment = new PaymentPackage({}, 5)
            }).to.throw(Error);
        });

        it("correct parameters", function () {
            let payment = new PaymentPackage('tralala', 5);
            expect(payment.name).to.equal('tralala');
        });
    });

    describe("constructor value tests", function () {
        it("empty string for the number", function () {
            expect(() => {
                payment = new PaymentPackage('kikiriki', '')
            }).to.throw(Error);
        });

        it("negative number", function () {
            expect(() => {
                payment = new PaymentPackage('kikiriki', -5)
            }).to.throw(Error);
        });

        it("object for the number", function () {
            expect(() => {
                payment = new PaymentPackage('kikiriki', {})
            }).to.throw(Error);
        });

        it("correct parameters", function () {
            let payment = new PaymentPackage('tralala', 0);
            expect(payment.value).to.equal(0);
        });

        it("correct parameters", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(payment.value).to.equal(25252);
        });
    });

    describe("VAT Tests", function () {
        it("check VAT default value", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(payment.VAT).to.equal(20);
        });

        it("VAT with a string", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(() => { payment.VAT = 'chakaraka'; }).to.throw(Error);
        });

        it("VAT with an object", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(() => { payment.VAT = {}; }).to.throw(Error);
        });

        it("VAT with a negative number", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(() => { payment.VAT = -5; }).to.throw(Error);
        });

        it("VAT with zero", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.VAT = 0;
            expect(payment.VAT).to.equal(0);
        });

        it("VAT with correct number", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.VAT = 57;
            expect(payment.VAT).to.equal(57);
        });
    });

    describe("active Tests", function () {
        it("check active default value", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(payment.active).to.equal(true);
        });

        it("active with a string", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(() => { payment.active = 'chakaraka'; }).to.throw(Error);
        });

        it("active with an object", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(() => { payment.active = {}; }).to.throw(Error);
        });

        it("active with correct result", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.active = false;
            expect(payment.active).to.equal(false);
        });

        it("active with correct result (double)", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.active = false;
            payment.active = true;
            expect(payment.active).to.equal(true);
        });
    });

    describe("toString() Tests", function () {
        it("toString with default values", function () {
            let payment = new PaymentPackage('tralala', 25252);
            expect(payment.toString()).to.equal(`Package: tralala\n- Value (excl. VAT): 25252\n- Value (VAT 20%): ${25252*1.2}`);
        });

        it("toString with active = false", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.active = false;
            expect(payment.toString()).to.equal(`Package: tralala (inactive)\n- Value (excl. VAT): 25252\n- Value (VAT 20%): ${25252*1.2}`);
        });

        it("toString with active = false and different VAT", function () {
            let payment = new PaymentPackage('tralala', 25252);
            payment.active = false;
            payment.VAT = 50;
            expect(payment.toString()).to.equal(`Package: tralala (inactive)\n- Value (excl. VAT): 25252\n- Value (VAT 50%): ${25252*1.5}`);
        });
    });
});