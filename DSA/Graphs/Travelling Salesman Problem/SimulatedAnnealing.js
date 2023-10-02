function simulatedAnnealingTSP(cities, distances, temperature, coolingRate) {
    let currentOrder = generateRandomOrder(cities.length);
    let currentDistance = calculateTotalDistance(currentOrder, distances);
    let bestOrder = currentOrder.slice();
    let minDistance = currentDistance;

    while (temperature > 1) {
        const i = Math.floor(Math.random() * cities.length);
        const j = Math.floor(Math.random() * cities.length);
        const newOrder = currentOrder.slice();
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]]; // Swap two cities
        const newDistance = calculateTotalDistance(newOrder, distances);

        const delta = newDistance - currentDistance;
        if (delta < 0 || Math.random() < Math.exp(-delta / temperature)) {
            currentOrder = newOrder;
            currentDistance = newDistance;
            if (currentDistance < minDistance) {
                bestOrder = currentOrder.slice();
                minDistance = currentDistance;
            }
        }

        temperature *= coolingRate;
    }

    return { order: bestOrder, distance: minDistance };
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = simulatedAnnealingTSP(cities, distances, 1000, 0.99);
console.log("Simulated Annealing Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Simulated Annealing Distance:", result.distance);
