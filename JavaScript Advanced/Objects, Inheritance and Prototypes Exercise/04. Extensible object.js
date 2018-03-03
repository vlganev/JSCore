function extensibleObject() {
	let obj = {
		extend: function (template) {
			for (let key in template) {
				if (template.hasOwnProperty(key)) {
					let element = template[key];
					if (typeof element === 'function') {
						obj.__proto__[key] = element;
					} else {
						obj[key] = element;
					}
				}
			}
		}
	}
	return obj;	
}