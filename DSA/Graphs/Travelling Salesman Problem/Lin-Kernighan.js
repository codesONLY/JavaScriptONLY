function linKernighanTSP(cities, distances) {
    const n = cities.length;
    let bestTour = [];
    let bestCost = Infinity;

    function calculateTourCost(tour) {
        let cost = 0;
        for (let i = 0; i < n - 1; i++) {
            const from = tour[i];
            const to = tour[i + 1];
            cost += distances[from][to];
        }
        cost += distances[tour[n - 1]][tour[0]]; // Return to the starting city
        return cost;
    }

    function reverseSubtour(tour, i, j) {
        while (i < j) {
            const temp = tour[i];
            tour[i] = tour[j];
            tour[j] = temp;
            i++;
            j--;
        }
    }

    function explore(k, tour, gain, canRemove) {
        if (k === n) {
            const tourCost = calculateTourCost(tour);
            if (tourCost < bestCost) {
                bestTour = [...tour];
                bestCost = tourCost;
            }
        } else {
            for (let i = k; i < n; i++) {
                if (canRemove[tour[i]]) {
                    for (let j = 0; j < n; j++) {
                        if (!canRemove[tour[j]]) {
                            const nextTour = [...tour];
                            reverseSubtour(nextTour, k, i);
                            nextTour[k] = tour[i];
                            const newGain = gain - distances[tour[k - 1]][tour[k]] + distances[tour[i]][tour[i + 1]];

                            if (newGain < 0) {
                                explore(k + 1, nextTour, newGain, canRemove);
                            }
                        }
                    }
                }
            }
        }
    }

    const initialTour = Array.from({ length: n }, (_, i) => i);
    const canRemove = Array(n).fill(true);
    canRemove[0] = false; // Starting city cannot be removed
    explore(1, initialTour, 0, canRemove);

    return { order: bestTour.map((idx) => cities[idx]), distance: bestCost };
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = linKernighanTSP(cities, distances);
console.log("Lin-Kernighan Algorithm Order:", result.order.join(" -> "));
console.log("Lin-Kernighan Algorithm Distance:", result.distance);
