function extractText() {
    let liValues = $('#items').find('li').toArray().map((li) => $(li).text()).join(', ');
    console.log(liValues);
    $('#result').text(liValues);
}