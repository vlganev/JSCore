function userNames(input) {
    let userNames = new Set();
    for (let name of input) {
        userNames.add(name);
    }
    let sortedUsernames = [...userNames].sort(sortByLength);

    for (let name of sortedUsernames) {
        console.log(name);
    }
    function sortByLength(a, b) {
        if(a.length != b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
}

userNames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);