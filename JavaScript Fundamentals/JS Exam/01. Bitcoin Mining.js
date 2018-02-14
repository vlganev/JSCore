function bitcoinMining(arr) {
    arr = arr.map(Number);
    let totalBitcoins = 0;
    let totalLeva = 0;
    let levaPerBitcoin = 11949.16;
    let levaPerGold = 67.51;
    let firstDayOfPurchase = 0;
    for (let i = 0; i < arr.length; i++) {
        if((i+1) % 3 == 0) {
            arr[i] = 0.7 * arr[i];
        }
        totalLeva += arr[i] * levaPerGold;
        while(totalLeva > levaPerBitcoin) {
            totalLeva -= levaPerBitcoin;
            totalBitcoins +=1;
        }
        if(firstDayOfPurchase == 0 && totalBitcoins > 0) firstDayOfPurchase = i+1;
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if(totalBitcoins > 0)
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`);
}

bitcoinMining([ '100', '200', '300' ]);
bitcoinMining([ '50', '100' ]);
bitcoinMining([ '3124.15', '504.212', '2511.124' ]);