function autoEngineeringCompany(input) {
    let data = new Map();
    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(/\s*\|\s*/g).filter(a => a !== '');
        producedCars = Number(producedCars);
        if(!data.get(carBrand)) {
            data.set(carBrand, new Map());
        }
        if(!data.get(carBrand).get(carModel)) {
            data.get(carBrand).set(carModel, 0);
        }
        data.get(carBrand).set(carModel, data.get(carBrand).get(carModel) + producedCars);
    }
    for(let [carBrand, totalProducedCars] of data){
        console.log(carBrand);
        for(let [model, count] of totalProducedCars){
            console.log(`###${model} -> ${count}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);