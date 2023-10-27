function tspDynamicProgrammingBitmask(cities, distances) {
    const n = cities.length;
    const memo = new Array(n).fill(null).map(() => new Array(1 << n).fill(null));

    function dp(node, bitmask) {
        if (bitmask === (1 << n) - 1) {
            return distances[node][0];
        }

        if (memo[node][bitmask] !== null) {
            return memo[node][bitmask];
        }

        let minDistance = Infinity;
        for (let nextNode = 0; nextNode < n; nextNode++) {
            if ((bitmask & (1 << nextNode)) === 0) {
                const newDistance = distances[node][nextNode] + dp(nextNode, bitmask | (1 << nextNode));
                minDistance = Math.min(minDistance, newDistance);
            }
        }

        memo[node][bitmask] = minDistance;
        return minDistance;
    }

    const initialBitmask = 1; // Start from city 0
    const minDistance = dp(0, initialBitmask);
    return minDistance;
}

// Test case
const cities = ["A", "B", "C"];
const distances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0],
];

const result = tspDynamicProgrammingBitmask(cities, distances);
console.log("Dynamic Programming (Bitmask) Optimal Distance:", result);
