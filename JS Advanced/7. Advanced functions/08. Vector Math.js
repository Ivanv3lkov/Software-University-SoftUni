(function () {
    return {
        add: (vectorA, vectorB) => [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]],
        multiply: (vectorA, scalar) =>  [vectorA[0] * scalar, vectorA[1] * scalar],
        length: (vector) =>Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]),
        dot: (vectorA, vectorB) => vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1],
        cross: (vectorA, vectorB) => vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
    }
})();



