function solve() {
    const proto = {};
    const instance = Object.create(proto);

    instance.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                proto[prop] = template[prop];
            } else {
                instance[prop] = template[prop]
            }
        };
    }
    return instance;
}

const myInstance = solve();
myInstance.extend({
    extensionMethod: function () {/*do something */},
    extensionProperty: 'someString'
});

console.log('intance props: ', myInstance);
console.log('prototype proprs ', Object.getPrototypeOf(myInstance));