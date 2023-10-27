function dynamicProgrammingTSP(cities, distances) {
    const numCities = cities.length;
    const numStates = 1 << numCities; // 2^n states to represent subsets of cities
    const memo = Array(numCities)
        .fill(null)
        .map(() => Array(numStates).fill(null));

    function tspDP(currentCity, state) {
        if (state === (1 << numCities) - 1) {
            // All cities visited, return to the starting city
            return distances[currentCity][0];
        }

        if (memo[currentCity][state] !== null) {
            return memo[currentCity][state];
        }

        let minDistance = Infinity;
        for (let nextCity = 0; nextCity < numCities; nextCity++) {
            if ((state & (1 << nextCity)) === 0) {
                // Next city not visited
                const newDistance = distances[currentCity][nextCity] + tspDP(nextCity, state | (1 << nextCity));
                minDistance = Math.min(minDistance, newDistance);
            }
        }

        memo[currentCity][state] = minDistance;
        return minDistance;
    }

    const optimalDistance = tspDP(0, 1); // Start from city 0 (the first city), with only city 0 visited
    return optimalDistance;
}

// Test case
const cities = ["A", "B", "C"];
const distances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0],
];

const result = dynamicProgrammingTSP(cities, distances);
console.log("Dynamic Programming Optimal Distance:", result);
