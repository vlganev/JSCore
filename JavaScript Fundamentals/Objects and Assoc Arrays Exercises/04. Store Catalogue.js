function storeCatalogue(input) {
    let catalogue = new Map();
    for (let line of input) {
        let [product, price] = line.split(/\s*:\s*/);
        let catalogueLetter = product.toUpperCase()[0];
        if (!catalogue.has(catalogueLetter))
            catalogue.set(catalogueLetter, new Map);
        catalogue.get(catalogueLetter).set(product, Number(price));
    }
    let keys = Array.from(catalogue.keys()).sort();
    for (let key of keys) {
        console.log(key);
        let products = [...catalogue.get(key).keys()].sort();
        for (let product of products)
            console.log(`  ${product}: ${catalogue.get(key).get(product)}`);
    }
}