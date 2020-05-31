function solve(text) {

    let result = text
        .toUpperCase()
        .match(/\w+/g)
        .join(', ');

        return result;
    }
    
    console.log(solve('Functions in JS can be nested, i.e. hold other functions'));
