function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');
    fixRowLinks();

    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveRowUp))
                .append($('<a href="#">[Down]</a>').click(moveRowDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
        tr.fadeIn(1000);
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryToTable(country.val(), capital.val());
        country.val('');
        capital.val('');
        fixRowLinks()
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        if (row.index() > 2) {
            row.fadeOut(1000, function() {
                row.insertBefore(row.prev());
                row.fadeIn();
                fixRowLinks();
            });
        }
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        if (!row.is(':last-child')) {
            row.fadeOut(1000, function() {
                row.insertAfter(row.next());
                row.fadeIn();
                fixRowLinks();
            });
        }
    }

    function deleteRow() {
        let element = $(this).parent().parent();
        element.fadeOut(function () {
            element.remove();
            fixRowLinks()
        });
    }

    function fixRowLinks() {
        let table = $('#countriesTable tr');
        table.find('a:contains("Up")').css('display', 'inline');
        table.find('a:contains("Down")').css('display', 'inline');

        let firstRow = table[2];
        $(firstRow).find('a:contains("Up")').css('display', 'none');


        let lastRow = table;
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none');
    }
}