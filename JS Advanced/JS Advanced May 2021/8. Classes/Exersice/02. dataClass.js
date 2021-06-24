class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uir = uri;
        this.version = version,
        this. message = message,
        this.response = undefined,
        this.fullfiled = false
    }
}




let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);