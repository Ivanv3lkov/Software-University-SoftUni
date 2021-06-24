class Textbox {
    constructor(selector, invalidSymbolsRegex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidSymbolsRegex;
        this.onInput();
    }

    onInput() {
        Array.from(this._elements).forEach(el => {
            el.addEventListener('change', (e) => { 
                this.value = e.target.value; 
            });
        });
    }

    get value() {
        return this._elements[0].value;
    }

    set value(val) {
        this._value = val;
        for (const element of this.elements) {
            element.value = val;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        if (this._invalidSymbols.test(this.elements[0].value)) {
            return false;
        } else {
            return true;
        }
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
