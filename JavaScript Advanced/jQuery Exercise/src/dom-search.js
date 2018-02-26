function domSearch(selector, isCaseSensitive) {
	let container = $(selector);
	container.addClass('items-control');
	let fragment = document.createDocumentFragment();
	let controlsDiv = $('<div>');
	controlsDiv.addClass('add-controls');
	let controlsLabel = $('<label>');
	controlsLabel.text('Enter text: ');
	let controlsInput = $('<input>');
	let addBtn = $('<a class="button" style="display: inline-block;">Add</a>');
	addBtn.on('click', function () {
		let element = $('input').val();
		if(element !== '') {
			appendElement(element);
		}
	});
	controlsInput.appendTo(controlsLabel);
	controlsLabel.appendTo(controlsDiv);
	addBtn.appendTo(controlsDiv);
	
	let searchControlsDiv = $('<div>');
	searchControlsDiv.addClass('search-controls');
	let searchControlsLabel = $('<label>');
	searchControlsLabel.text('Search: ');
	let searchControlsInput = $('<input>');
	searchControlsInput.on('input', function () {	
		let text = $(this).val();
		console.log($('.list-item'));
        $('.list-item').each((index, li) => matches(li, text));
			
	});
	searchControlsInput.appendTo(searchControlsLabel);
	searchControlsLabel.appendTo(searchControlsDiv);
	
	let resultControlsDiv = $('<div>');
	resultControlsDiv.addClass('result-controls');
	let ulList = $('<ul>');
	ulList.addClass('items-list');
	ulList.appendTo(resultControlsDiv);
	
	
	controlsDiv.appendTo(container);
	searchControlsDiv.appendTo(container);
	resultControlsDiv.appendTo(container);
	
	
	container.append(fragment);
	
	function appendElement(element) {
		let list = $('<li>');
		list.addClass('list-item');
		let aBtn = $('<a class="button">X</a>');
		let aTxt = $(`<strong>${element}</strong>`);
		aBtn.appendTo(list);
		aTxt.appendTo(list);
		list.appendTo(ulList);
	}
	
	function matches(li, text) {
		$(li).css('display', '');
		if(isCaseSensitive) {
			console.log('xxx');
			if ($(li).find('strong').text().indexOf(text) == -1) {
				$(li).css('display', 'none');
			}
		} else {
			console.log('xxx');
			if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) == -1) {
				$(li).css('display', 'none');
			}
		}
	}
}