class Ticket {
    constructor (destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}
let result = [];
for (let element of arr) {
    let [destination, price, status] = element.split('|');
    let ticket = new Ticket(destination, price, status);
    result.push(ticket);
}
return result.sort((a, b) => a[criteria] > b[criteria]);