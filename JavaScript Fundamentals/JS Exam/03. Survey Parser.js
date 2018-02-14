function surveyParser(text) {
    let surveyDataPattern = /<svg>(.*)<\/svg>/g;
    let surveyData = surveyDataPattern.exec(text);
    let surveyRating;
    if(surveyData == null) {
        console.log('No survey found');
        return;
    } else {
        surveyData = surveyData[1];
    }

    let sectionsPattern = /<cat>(.*)<\/cat>[ ]*<cat>(.*)<\/cat>/gm;
    let sectionsData = sectionsPattern.exec(surveyData);
    let surveyHeadingAndLabel;
    if(sectionsData == null) {
        console.log('No valid sections found');
        return;
    } else {
        let surveyHeadingAndLabelPattern = /^<text>(.*)<\/text>$/g;
        let surveyHeadingAndLabelRegex = surveyHeadingAndLabelPattern.exec(sectionsData[1]);
        if(surveyHeadingAndLabelRegex == null) {
            console.log('Invalid format');
            return;
        } else {
            surveyHeadingAndLabel = surveyHeadingAndLabelRegex[1];
            surveyRating = sectionsData[2];
        }
    }
    let surveyHeading;
    let surveyLabel;

    let surveyLabelPattern = /(.*)[\[](.+)[\]]/g;
    let surveyLabelData = surveyLabelPattern.exec(surveyHeadingAndLabel);
    if(surveyLabelData == null) {
        console.log('Invalid format');
        return;
    } else {
        surveyHeading = surveyLabelData[1];
        surveyLabel = surveyLabelData[2];
    }
    let surveyRatingPattern = /<g><val>([0-9]|10)<\/val>([\d]+)<\/g>/g;
    let surveyRatingMatch = surveyRatingPattern.exec(surveyRating);

//    let surveyRatings = {};
    let totalSumOfValues = 0;
    let totalCounts = 0

    while(surveyRatingMatch) {
        let value = Number(surveyRatingMatch[1]);
        let count = Number(surveyRatingMatch[2]);
        totalSumOfValues += value * count;
        totalCounts += count;
//        surveyRatings[value] = count;
        surveyRatingMatch = surveyRatingPattern.exec(surveyRating);
    }
    let averageRating = (totalSumOfValues / totalCounts);
    averageRating = Math.round(averageRating*100)/100;
    console.log(`${surveyLabel}: ${averageRating}`);
}

surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
surveyParser('<p>Our guests may enjoy a special menu of freshly caught seafood.</p><br><svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
surveyParser('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');