function listProcessor(arr) {
	let commandExecutor = (function () {
		let result = [];
		function add(str) {
			result.push(str);
		}
		
		function remove(str) {
			result = result.filter(w => w !== str);
		}
		
		function print() {
			console.log(result.join(','))
		}
		
		return {add, remove, print}
	}());
	
	for (let str of arr) {
		let [command, value] = str.split(' ');
		commandExecutor[command](value);
	}
}