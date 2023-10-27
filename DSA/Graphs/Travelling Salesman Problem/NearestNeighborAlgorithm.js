function nearestNeighborTSP(cities, distances) {
    const n = cities.length;
    const visited = Array(n).fill(false);
    const order = [0]; // Start from the first city (index 0)
    let totalDistance = 0;

    visited[0] = true;
    for (let i = 1; i < n; i++) {
        let nearestIdx = -1;
        let minDistance = Infinity;

        for (let j = 0; j < n; j++) {
            if (!visited[j] && distances[order[i - 1]][j] < minDistance) {
                nearestIdx = j;
                minDistance = distances[order[i - 1]][j];
            }
        }

        order.push(nearestIdx);
        visited[nearestIdx] = true;
        totalDistance += minDistance;
    }

    totalDistance += distances[order[n - 1]][order[0]]; // Return to the starting city
    return { order, distance: totalDistance };
}

// Test case
const cities = ["A", "B", "C"];
const distances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0],
];

const result = nearestNeighborTSP(cities, distances);
console.log("Approximate Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Approximate Distance:", result.distance);
