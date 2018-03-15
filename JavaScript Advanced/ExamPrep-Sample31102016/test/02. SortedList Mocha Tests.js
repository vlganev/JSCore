let expect = require('chai').expect;
let SortedList = require('../02. SortedList');

describe('SortedList Unit Tests', function() {
	let myList;
	beforeEach(function() {
		myList = new SortedList();
	});
	
	describe('Test Initial State', function() {
		it('add exists', function() {
			expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
		});				
		it('get exists', function() {
			expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
			
		});	
		it('remove exists', function() {
			expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
		});	
		it('size exists', function() {
			expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
		});	
	});
	
	describe('Test add', function() {
		it('with one element', function() {
			myList.add(5)
			expect(myList.list.join(', ')).to.equal('5', 'List did not add correctly');
		});	
		
		it('with many elements', function() {
			myList.add(5)
			myList.add(4)
			myList.add(2)
			myList.add(1)
			expect(myList.list.join(', ')).to.equal('1, 2, 4, 5', 'List did not add correctly');
		});	
	});
	
	describe('Test remove', function() {
		it('with empty list', function() {
			myList.add(5)
			expect(() => myList.remove()).to.throw(Error, 'Collection is empty.');
		});	
		
		it('with negative index', function() {
			myList.add(3);
			expect(() => myList.remove(-1)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});	
		
		it('with index equal to list length', function() {
			myList.add(3);
			expect(() => myList.remove(1)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});	
		
		it('with index bigger than list length', function() {
			myList.add(3);
			expect(() => myList.remove(2)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});			
		
		it('with correct index should remove', function() {
			myList.add(3)
			myList.add(4)
			myList.add(5)
			myList.remove(1)
			expect(myList.list.join(', ')).to.equal('3, 5', 'List did not remove correctly');
		});	
	});
	
	describe('Test get', function() {
		it('with empty list', function() {
			myList.add(5)
			expect(() => myList.get(1)).to.throw(Error, 'Collection is empty.');
		});	
		
		it('with negative index', function() {
			myList.add(3);
			expect(() => myList.get(-1)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});	
		
		it('with index equal to list length', function() {
			myList.add(3);
			expect(() => myList.get(1)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});	
		
		it('with index bigger than list length', function() {
			myList.add(3);
			expect(() => myList.get(2)).to.throw(Error, 'Index was outside the bounds of the collection.');
		});	
		
		it('with correct index', function() {
			myList.add(3)
			myList.add(4)
			myList.add(5)
			let element = myList.get(1)
			expect(element).to.equal('4', 'List did not get correctly');
		});	
	});
	
	describe('Test size', function() {
		it('with empty list', function() {
			expect(myList.size).to.equal(0, 'List was not empty');
		});	
		
		it('with non-empty list', function() {
			myList.add(3)
			myList.add(4)
			myList.add(5)
			expect(myList.size).to.equal(3, 'List size was not correct');
		});	
	});
});