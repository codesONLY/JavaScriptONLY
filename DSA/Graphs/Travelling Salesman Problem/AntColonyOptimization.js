function antColonyOptimizationTSP(cities, distances, numAnts, maxIterations, pheromoneEvaporationRate, alpha, beta) {
    const numCities = cities.length;
    const initialPheromoneLevel = 1 / (numCities * numCities);
    let pheromoneMatrix = Array.from({ length: numCities }, () =>
        Array(numCities).fill(initialPheromoneLevel)
    );
    let bestOrder;
    let bestDistance = Infinity;

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        const antPaths = [];
        for (let ant = 0; ant < numAnts; ant++) {
            const path = constructAntPath(pheromoneMatrix, distances, alpha, beta);
            antPaths.push(path);
            const pathDistance = calculateTotalDistance(path, distances);
            if (pathDistance < bestDistance) {
                bestOrder = path;
                bestDistance = pathDistance;
            }
        }

        updatePheromoneMatrix(pheromoneMatrix, antPaths, pheromoneEvaporationRate);
    }

    return { order: bestOrder, distance: bestDistance };
}

function constructAntPath(pheromoneMatrix, distances, alpha, beta) {
    const numCities = pheromoneMatrix.length;
    const startCity = Math.floor(Math.random() * numCities);
    let currentCity = startCity;
    const path = [startCity];
    const unvisitedCities = new Set([...Array(numCities).keys()].filter((i) => i !== startCity));

    while (unvisitedCities.size > 0) {
        const nextCity = chooseNextCity(currentCity, unvisitedCities, pheromoneMatrix, distances, alpha, beta);
        path.push(nextCity);
        unvisitedCities.delete(nextCity);
        currentCity = nextCity;
    }

    return path;
}

function chooseNextCity(currentCity, unvisitedCities, pheromoneMatrix, distances, alpha, beta) {
    const pheromoneLevels = [];
    const totalProbability = [...unvisitedCities].reduce((sum, city) => {
        const pheromone = pheromoneMatrix[currentCity][city];
        const distance = distances[currentCity][city];
        const probability = Math.pow(pheromone, alpha) * Math.pow(1 / distance, beta);
        pheromoneLevels.push(probability);
        return sum + probability;
    }, 0);

    const randomValue = Math.random() * totalProbability;
    let accumulatedProbability = 0;

    for (let i = 0; i < pheromoneLevels.length; i++) {
        accumulatedProbability += pheromoneLevels[i];
        if (accumulatedProbability >= randomValue) {
            return [...unvisitedCities][i];
        }
    }

    return [...unvisitedCities][0]; // Fallback in case of numerical instability
}

function updatePheromoneMatrix(pheromoneMatrix, antPaths, pheromoneEvaporationRate) {
    const numCities = pheromoneMatrix.length;

    // Evaporate pheromone
    for (let i = 0; i < numCities; i++) {
        for (let j = 0; j < numCities; j++) {
            pheromoneMatrix[i][j] *= (1 - pheromoneEvaporationRate);
        }
    }

    // Deposit pheromone based on ant paths
    for (const path of antPaths) {
        const pathDistance = calculateTotalDistance(path, distances);
        for (let i = 0; i < path.length - 1; i++) {
            const fromCity = path[i];
            const toCity = path[i + 1];
            pheromoneMatrix[fromCity][toCity] += 1 / pathDistance;
            pheromoneMatrix[toCity][fromCity] += 1 / pathDistance;
        }
    }
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = antColonyOptimizationTSP(cities, distances, 10, 100, 0.5, 1.0, 2.0);
console.log("Ant Colony Optimization Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Ant Colony Optimization Distance:", result.distance);
