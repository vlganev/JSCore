let Person = require('./02. Inheriting and Replacing ToString');

function extendClass(classToExtend) {
	classToExtend.prototype.species = 'Human';
	classToExtend.prototype.toSpeciesString = function () {
		return `I am a ${this.species}. ${this.toString()}`
	}
}