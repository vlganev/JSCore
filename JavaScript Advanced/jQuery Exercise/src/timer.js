function timer() {
	let time, intervalID;
	let startBtn = $('#start-timer');
	let stopBtn = $('#stop-timer');
	startBtn.on('click', function () {
		time = -1;
		step();
		intervalID = setInterval(step, 1000);
		startBtn.disabled = true;
		stopBtn.disabled = false;
	});
	
	stopBtn.on('click', function () {
		clearInterval(intervalID);
		startBtn.disabled = false;
		stopBtn.disabled = true;
	});

	function step() {
		time++;
		$('#hours').text(("0" + Math.trunc(time/3600)).slice(-2));
		$('#minutes').text(("0" + Math.trunc((time/60)%60)).slice(-2));
		$('#seconds').text(('0' + Math.trunc(time%60)).slice(-2));
	}
}