function filterByAge(minAge, nameA, ageA, nameB, ageB) {
    let person1 = {name: nameA, age: Number(ageA)};
    let person2 = {name: nameB, age: Number(ageB)};

    if(person1.age >= minAge) {
        console.log(person1);
    } 
    if(person2.age >= minAge) {
        console.log(person2);
    }
}