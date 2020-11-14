function solve(input) {
    const engineTypes = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    return {
        model: input.model,
        engine: engineTypes.find(e => e.power >= input.power),
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: new Array(4).fill(input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize)
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));