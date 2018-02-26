function calendar([day, month, year]) {
    let today = new Date(year, month-1, day);
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let captionContent = monthNames[today.getMonth()] + " " + today.getFullYear();
	$('#content')
		.append($('<table>')
			.append($('<caption>').text(captionContent))
			.append($('<tbody>')
				.append($('<tr>')
					.append($('<th>').text("Mon"))
					.append($('<th>').text("Tue"))
					.append($('<th>').text("Wed"))
					.append($('<th>').text("Thu"))
					.append($('<th>').text("Fri"))
					.append($('<th>').text("Sat"))
					.append($('<th>').text("Sun")))));
					
	daysCount = (new Date(today.getFullYear(), today.getMonth()+1, 0)).getDate();
	let firstDay = new Date(today.getFullYear() + "-" + (today.getMonth()+1) + "-01").getDay();
	if (firstDay == 0) firstDay = 7;
	console.log(firstDay);
	
	$('tbody').append($('<tr>'))
	for (let i=0; i <= firstDay; i++) {
		$('tbody tr:last-child').append($('<td>'))
	}
 	for (let i=1; i <= daysCount; i++) {
 		if((firstDay + i) % 7 === 0) {
 			$('tbody').append($('<tr>'))
			if (i == today.getDate()) {
				$('tbody tr:last-child').append($('<td>').addClass('today').text(`${i}`));
			} else {
				$('tbody tr:last-child').append($('<td>').text(`${i}`));
			}
 		} else {
			if (i == today.getDate()) {
				$('tbody tr:last-child').append($('<td>').addClass('today').text(`${i}`));
			} else {
				$('tbody tr:last-child').append($('<td>').text(`${i}`));
			}
 		}
 	}
	let lastEmptyCells = 35 - daysCount - firstDay - 1
	for (let i=0; i < lastEmptyCells; i++) {
		$('tbody tr:last-child').append($('<td>'))
	}
}