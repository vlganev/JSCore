class PaymentProcessor {
    constructor(options) {
        this.options = { types: ["service", "product", "other"], precision: 2 }
        for (let key in options) {
            if(key === 'types' || key === 'precision') {
                this.options[key] = options[key];
            }
        }
        this.payments = [];
    }

    registerPayment(id, name, type, value) {
        if(id === '' || typeof id !== 'string') {
            throw new Error("ID not found");
        }
        if (name === '' || typeof id !== 'string') {
            throw new Error("Name not found")
        }
        if(!this.options.types.includes(type)) {
            throw new Error("invalid type");
        }
        if (typeof value !== 'number') {
            throw new Error("invalid value");
        }
        if(this.payments.some(p => p.id === id)) {
            throw new Error("ID is already used")
        }
        this.payments.push({
            id,
            name,
            type,
            value: Math.round( value * Math.pow(10, this.options.precision) ) / Math.pow(10, this.options.precision)
        });
    }

    deletePayment(id) {
        this._validate(id);
        this.payments = this.payments.filter(p => p.id !== id);
    }

    get(id) {
        this._validate(id);
        let paymentObj = this.payments.find(p => p.id === id);
        console.log(paymentObj);
        return `Details about payment ID: ${id}\n- Name: ${paymentObj.name}\n- Type: ${paymentObj.type}\n- Value: ${paymentObj.value}`;
    }

    setOptions(options) {
        for (let key in options) {
            if(key === 'types' || key === 'precision') {
                this.options[key] = options[key];
            }
        }
    }

    _validate(id) {
        if(this.payments.some(p => p.id === id)) {
            return true;
        }
        throw new Error("ID not found")
    }
    toString() {
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        let balance = this.payments.reduce((a, b) => a + b.value, 0);
        let result = `Summary\n- Payments: ${this.payments.length}\n- Balance: ${balance}`;

        return result;
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
