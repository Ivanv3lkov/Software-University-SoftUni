export function map() {
    return {
        form: () => document.querySelector('form'),
        result: () => document.querySelector('#results > tbody'),
    };
}
