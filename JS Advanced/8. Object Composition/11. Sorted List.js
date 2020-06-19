function solve() {
    return {
        elements: [],
        size: 0,
        add: function(element) { 
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size++
        },
        remove: function(index) {
            if (index < 0 || index >= this.elements.length) {
                throw new RangeError('Index is outside the bounds of the list.');
            }
            this.elements.splice(index, 1);
            this.elements.sort((a, b) => a - b);
            this.size--
        },
        get: function(index) {
            if (index < 0 || index >= this.elements.length) {
                throw new RangeError('Index is outside the bounds of the list.');
            }
            return this.elements[index];
        }
    }
}



