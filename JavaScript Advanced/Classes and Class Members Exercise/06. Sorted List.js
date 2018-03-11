class SortedList {
	constructor() {
		this.arr = [],
		this.size = 0;
	}

	add (element) {
		this.arr.push(element);
		this.size++;
		this.sort();
		return this.arr;
	};
	remove (index) {
		if(index >= 0 && index < this.arr.length) {
			this.arr.splice(index,1);
			this.size--;
			return this.arr;
		}
	};
	get (index) {
		if(index >= 0 && index < this.arr.length) {
			return this.arr[index];
			return this.arr;
		}
	};
	toString () {
		return this.arr.join(' ');
	};
	sort () {
		this.arr.sort((a,b) => a-b);
		return this.arr;
	};
}