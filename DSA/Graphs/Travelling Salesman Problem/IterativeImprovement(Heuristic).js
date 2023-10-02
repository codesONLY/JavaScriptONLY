function iterativeImprovementTSP(cities, distances) {
    const numCities = cities.length;
    let currentOrder = generateRandomOrder(numCities);
    let currentDistance = calculateTotalDistance(currentOrder, distances);
    let improvement = true;

    while (improvement) {
        improvement = false;

        for (let i = 0; i < numCities - 1; i++) {
            for (let j = i + 1; j < numCities; j++) {
                const newOrder = twoOptSwap(currentOrder, i, j);
                const newDistance = calculateTotalDistance(newOrder, distances);

                if (newDistance < currentDistance) {
                    currentOrder = newOrder;
                    currentDistance = newDistance;
                    improvement = true;
                }
            }
        }
    }

    return { order: currentOrder, distance: currentDistance };
}

function twoOptSwap(order, i, j) {
    const newOrder = [...order];
    while (i < j) {
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
        i++;
        j--;
    }
    return newOrder;
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = iterativeImprovementTSP(cities, distances);
console.log("Iterative Improvement Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Iterative Improvement Distance:", result.distance);
