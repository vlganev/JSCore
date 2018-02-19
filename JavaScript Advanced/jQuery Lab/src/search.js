function search() {
    let targetValue = $('#searchText').val();
    let counter = 0;
    $('#towns li').each((index, el) => {
        if (el.textContent.includes(targetValue)) {
            $(el).css('font-weight', 'bold');
            counter++;
        }
    })
    $('#result').text(counter + ' matches found.');
}