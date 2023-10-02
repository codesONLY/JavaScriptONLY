function permute(arr) {
    if (arr.length === 0) return [[]];
    const [first, ...rest] = arr;
    const permutationsWithoutFirst = permute(rest);
    return permutationsWithoutFirst.flatMap((perm) =>
        perm.map((_, idx) => [...perm.slice(0, idx), first, ...perm.slice(idx)])
    );
}

function calculateTotalDistance(order, distances) {
    let totalDistance = 0;
    for (let i = 0; i < order.length - 1; i++) {
        totalDistance += distances[order[i]][order[i + 1]];
    }
    return totalDistance;
}

function bruteForceTSP(cities, distances) {
    const cityIndices = Array.from({ length: cities.length }, (_, i) => i);
    const permutations = permute(cityIndices);
    let minDistance = Infinity;
    let bestOrder = [];

    for (const perm of permutations) {
        const distance = calculateTotalDistance(perm, distances);
        if (distance < minDistance) {
            minDistance = distance;
            bestOrder = perm;
        }
    }

    return { order: bestOrder, distance: minDistance };
}

// Test case
const cities = ["A", "B", "C"];
const distances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0],
];

const result = bruteForceTSP(cities, distances);
console.log("Optimal Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Optimal Distance:", result.distance);