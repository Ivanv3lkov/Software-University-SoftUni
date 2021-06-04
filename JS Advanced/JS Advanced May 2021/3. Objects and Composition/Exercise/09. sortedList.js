function createSortedList() {
    let numbers = [];
    return {
        add(elemenent)  {
            numbers.push(elemenent);
            numbers.sort((a, b) => a - b)
        },
        remove(index)  {
            if (index < 0 || index > numbers.length - 1) {
                throw new Error('Index is out of range');
            }
            numbers.splice(index, 1)
        },
        get(index)  {
            if (index < 0 || index > numbers.length - 1) {
                throw new Error('Index is out of range');
            }
            return numbers[index];
        },
        get size() {
            return numbers.length;
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
