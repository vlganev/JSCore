function objectInheritance(input) {
	let commandExecutor = (function() {
		let store = {}
		function create(arr) {
			if(arr.length > 2) {
				store[arr[0]] = Object.create(store[arr[2]]);
			} else {
				store[arr[0]] = {}
			}
		}
		
		function set(arr) {
			let name = arr[0];
			let key = arr[1];
			let value = arr[2];
			store[name][key] = value;
		}
		
		function print(arr) {
			let result = [];
			for (let key in store[arr[0]]) {
				result.push(key + ':' + store[arr[0]][key]);
			}
			console.log(result.join(', '));
		}
		
		return {create, set, print}
	}());
	
	for (let str of input) {
		let args = str.split(' ');
		let command = args.shift();
		commandExecutor[command](args);
	}
}