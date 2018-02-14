function gameOfEpicness(kingdoms, gamePlay) {
    let game = new Map();
    let winnersKingdom = new Map();
    for (let gameSet of kingdoms) {
        if(!game.get(gameSet.kingdom)) {
            game.set(gameSet.kingdom, new Map());
        }
        if(!game.get(gameSet.kingdom).get(gameSet.general)) {
            game.get(gameSet.kingdom).set(gameSet.general, {army: gameSet.army, wins: 0, losses: 0});
        } else {
            let currArmy = game.get(gameSet.kingdom).get(gameSet.general).army;
            game.get(gameSet.kingdom).get(gameSet.general).army = currArmy + gameSet.army;
        }
    }

    for (let action of gamePlay) {
        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = action;
        if (attackingKingdom == defendingKingdom) continue;

        let attackingGeneralArmy = game.get(attackingKingdom).get(attackingGeneral).army;
        let defendingGeneralArmy = game.get(defendingKingdom).get(defendingGeneral).army;
        if (attackingGeneralArmy == defendingGeneralArmy) {
            continue;
        }

        if (attackingGeneralArmy > defendingGeneralArmy) {
            let newAttackingGeneralArmy = Math.floor(attackingGeneralArmy * 1.10);
            let newDefendingGeneralArmy = Math.floor(defendingGeneralArmy * 0.90);
            game.get(attackingKingdom).get(attackingGeneral).army = newAttackingGeneralArmy;
            game.get(defendingKingdom).get(defendingGeneral).army = newDefendingGeneralArmy;
            game.get(attackingKingdom).get(attackingGeneral).wins += 1;
            game.get(defendingKingdom).get(defendingGeneral).losses += 1;

            if (!winnersKingdom.get(defendingKingdom)) {
                winnersKingdom.set(defendingKingdom, {wins: 0, losses: 1});
            } else {
                winnersKingdom.get(defendingKingdom).losses += 1;
            }
            if (!winnersKingdom.get(attackingKingdom)) {
                winnersKingdom.set(attackingKingdom, {wins: 1, losses: 0});
            } else {
                winnersKingdom.get(attackingKingdom).wins += 1;
            }

        } else if (attackingGeneralArmy < defendingGeneralArmy) {
            let newAttackingGeneralArmy = Math.floor(attackingGeneralArmy * 0.90);
            let newDefendingGeneralArmy = Math.floor(defendingGeneralArmy * 1.10);
            game.get(attackingKingdom).get(attackingGeneral).army = newAttackingGeneralArmy;
            game.get(defendingKingdom).get(defendingGeneral).army = newDefendingGeneralArmy;
            game.get(defendingKingdom).get(defendingGeneral).wins += 1;
            game.get(attackingKingdom).get(attackingGeneral).losses += 1;

            if (!winnersKingdom.get(defendingKingdom)) {
                winnersKingdom.set(defendingKingdom, {wins: 1, losses: 0});
            } else {
                winnersKingdom.get(defendingKingdom).wins += 1;
            }
            if (!winnersKingdom.get(attackingKingdom)) {
                winnersKingdom.set(attackingKingdom, {wins: 0, losses: 1});
            } else {
                winnersKingdom.get(attackingKingdom).losses += 1;
            }
        }
    }
    let newWinnersKingdom = [...winnersKingdom].sort(function(firstEntry, secondEntry) {
        let result = secondEntry[1].wins - firstEntry[1].wins;
        if(result == 0) {
            result = firstEntry[1].losses - secondEntry[1].losses;
        }
        if(result == 0) {
            result = firstEntry[0].localeCompare(secondEntry[0]);
        }
        return result;
    });
    let theWinnerKingdom;
    if(newWinnersKingdom.length == 0) {
        let sortByName = [...game].sort(function(firstEntry, secondEntry) {
            result = firstEntry[0].localeCompare(secondEntry[0]);
            return result;
        });
        theWinnerKingdom = sortByName[0][0];
    } else {
        theWinnerKingdom = newWinnersKingdom[0][0];
    }
    console.log(`Winner: ${theWinnerKingdom}`);
    let infoWinnerKingdom = game.get(theWinnerKingdom);//
    infoWinnerKingdom = [...infoWinnerKingdom].sort(function(firstEntry, secondEntry) {
        let result = secondEntry[1].army - firstEntry[1].army;
        if(result == 0) {
            result = secondEntry[1].wins - firstEntry[1].wins;
        }
        if(result == 0) {
            result = firstEntry[1].losses - secondEntry[1].losses;
        }
        return result;
    });
    for (let map of infoWinnerKingdom) {
        console.log(`/\\general: ${map[0]}`);
        console.log(`---army: ${map[1].army}`);
        console.log(`---wins: ${map[1].wins}`);
        console.log(`---losses: ${map[1].losses}`);
    }
}
gameOfEpicness([ { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
        { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
        { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
        { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
        { kingdom: 'Maiden Way', general: 'Berinon', army: 100000 } ],
    [ [ 'YorkenShire', 'Quinn', 'YorkenShire', 'Ulric' ],
        [ 'Stonegate', 'Ulric', 'Stonegate', 'Doran' ],
        [ 'Stonegate', 'Doran', 'Maiden Way', 'Merek' ],
        [ 'Stonegate', 'Ulric', 'Maiden Way', 'Merek' ],
        [ 'Maiden Way', 'Berinon', 'Stonegate', 'Ulric' ] ]);