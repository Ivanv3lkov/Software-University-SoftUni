function Spy(obj, methodName) {
    const spy = { count: 0 };
    const method = obj[methodName];
    if (!method) { throw new Error('No such method!') };
    obj[methodName] = function (...args) {
        this.count++;
        return method.apply(obj, args);
    }.bind(spy);
    return spy;
}

let obj = {
    method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }
