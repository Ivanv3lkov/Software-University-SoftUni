export function getUrl() {
    return `https://api.backendless.com/B0437257-8242-29C9-FF6E-2870E264F600/8C223125-B3FF-4DD5-8663-02512E50F24C/data/students`;
}
export class FetchData {
    constructor(url) {
        this.url = url;
    }
    getData() {
        return fetch(this.url());
    }
    sentData(data) {
        return fetch(this.url(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}
