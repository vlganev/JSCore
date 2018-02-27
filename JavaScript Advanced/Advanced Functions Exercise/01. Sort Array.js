function sortArray(inputArray, sortMethod) {
	var ascendingComparator = function (a, b) {
		return a - b;
	};
	
	var descendingComparator = function (a, b) {
		return b - a;
	};
	
	var sortingStrategies = {
		'asc': ascendingComparator,
		'desc': descendingComparator
	};
	
	return inputArray.sort(sortingStrategies[sortMethod]);
}