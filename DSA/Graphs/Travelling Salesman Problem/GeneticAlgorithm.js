function generateRandomOrder(n) {
    const order = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]]; // Swap elements randomly
    }
    return order;
}

function calculateTotalDistance(order, distances) {
    let totalDistance = 0;
    for (let i = 0; i < order.length - 1; i++) {
        totalDistance += distances[order[i]][order[i + 1]];
    }
    return totalDistance;
}

function geneticAlgorithmTSP(cities, distances, populationSize, generations) {
    let population = Array.from({ length: populationSize }, () => generateRandomOrder(cities.length));
    let bestOrder = population[0];
    let minDistance = calculateTotalDistance(bestOrder, distances);

    for (let generation = 0; generation < generations; generation++) {
        population = population.sort(() => 0.5 - Math.random()); // Shuffle population

        for (let i = 0; i < populationSize; i += 2) {
            const parent1 = population[i];
            const parent2 = population[i + 1];
            const [child1, child2] = crossover(parent1, parent2);
            mutate(child1);
            mutate(child2);

            population[i] = child1;
            population[i + 1] = child2;
        }

        const newBestOrder = population[0];
        const newMinDistance = calculateTotalDistance(newBestOrder, distances);
        if (newMinDistance < minDistance) {
            bestOrder = newBestOrder;
            minDistance = newMinDistance;
        }
    }

    return { order: bestOrder, distance: minDistance };
}

// Helper functions for Genetic Algorithm
function crossover(parent1, parent2) {
    const n = parent1.length;
    const start = Math.floor(Math.random() * n);
    const end = Math.floor(Math.random() * (n - start)) + start;
    const child1 = parent1.slice(start, end + 1).concat(parent2.filter((city) => !child1.includes(city)));
    const child2 = parent2.slice(start, end + 1).concat(parent1.filter((city) => !child2.includes(city)));
    return [child1, child2];
}

function mutate(order) {
    const n = order.length;
    const i = Math.floor(Math.random() * n);
    const j = (i + 1) % n;
    [order[i], order[j]] = [order[j], order[i]]; // Swap two cities
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = geneticAlgorithmTSP(cities, distances, 100, 1000);
console.log("Genetic Algorithm Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Genetic Algorithm Distance:", result.distance);
