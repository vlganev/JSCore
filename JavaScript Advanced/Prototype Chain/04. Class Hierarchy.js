function classHierarchy() {
	class Figure {
		constructor() {
			if (new.target === Figure) {
				throw new TypeError('Figure class is abstract!');
			}
		}
		
		toString() {
			return this.constructor.name;
		}
	}

	    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        toString(){
            return super.toString() + ` - radius: ${this.radius}`;
        }

        get area(){
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
	
	class Rectangle extends Figure {
		constructor(width, height) {
			super();
			this.width = width;
			this.height = height;
		}
		
		toString(){
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
		
		get area() {
			return this.width * this.height;
		}
	}
	return {Figure, Circle, Rectangle}
}