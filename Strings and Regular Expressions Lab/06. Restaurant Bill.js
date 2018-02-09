function restaurantBill(bill) {
    let products = bill.filter((str, i) => i % 2 === 0).join(', ');
    let sum = bill.filter((str, i) => i % 2 === 1).map(Number).reduce((a,b) => a+b);
    console.log(`You purchased ${products} for a total sum of ${sum}`);
}