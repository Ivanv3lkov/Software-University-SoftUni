function extendClass() {
    class Figure {
        units = {
            m: 0.01,
            cm: 1,
            mm: 10,
        }
 
        defaultUnit = 'cm';
        
        changeUnits(x) {
            this.defaultUnit = x;
        }
 
        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} -`;
        }
    }
 
    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }
 
        get area() {
            const r = this.radius * this.units[this.defaultUnit];
            return Math.PI * r * r;
        }
 
        toString() {
            const r = this.radius * this.units[this.defaultUnit];
            return `${super.toString()} radius: ${r}`;
        }
    }
 
    class Rectangle extends Figure {
        constructor(w, h, u) {
            super();
            this.width = w;
            this.height = h;
            this.defaultUnit = u;
        }
 
        get area() {
            const w = this.width * this.units[this.defaultUnit];
            const h = this.height * this.units[this.defaultUnit];
            return w * h;
        }
 
        toString() {
            const w = this.width * this.units[this.defaultUnit];
            const h = this.height * this.units[this.defaultUnit];
            return `${super.toString()} width: ${w}, height: ${h}`;
        }
    }
 
    return {
        Figure,
        Circle,
        Rectangle,
    };
 }

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
