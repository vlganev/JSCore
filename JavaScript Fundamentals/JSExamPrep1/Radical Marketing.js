function radicalMarketing(input) {
    let research = new Map();
    for (let element of input) {
        if(!element.match(/-/g)) {
            if(!research.has(element))
                research.set(element, {subscribers: [], following: 0})
        } else {
            let [firstPerson, secondPerson] = element.split('-');
            if(!research.has(firstPerson) || !research.has(secondPerson)) continue;
            research.get(secondPerson).subscribers.push(firstPerson);
            research.get(firstPerson).following += 1;
        }
    }

    let sortedResearch = [...research].sort(function(firstEntry, secondEntry) {
        let firstEntrySubscribers = firstEntry[1].subscribers.length;
        let secondEntrySubscribers = secondEntry[1].subscribers.length;

        let result = secondEntrySubscribers - firstEntrySubscribers;

        if(result == 0) {
            let firstEntryFollowing = firstEntry[1].following;
            let secondEntryFollowing = secondEntry[1].following;

            result = secondEntryFollowing - firstEntryFollowing;
        }
        return result;
    });
    let count = 1;
    console.log([...sortedResearch.entries()][0][1][0]);
    for (let subs of [...sortedResearch.entries()][0][1][1].subscribers) {
        console.log(`${count}. ${subs}`);
        count++;
    }
}

radicalMarketing([ 'A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A', '' ]);
radicalMarketing([ 'J', 'G', 'P', 'R', 'C', 'J-G', 'G-J', 'P-R', 'R-P', 'C-J', '' ]);
radicalMarketing([ 'J', 'G', 'P', 'R', 'C', 'J-G', 'G-P', 'P-P', 'R-P', 'C-J', '' ]);