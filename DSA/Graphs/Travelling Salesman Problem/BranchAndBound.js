function tspBranchAndBound(cities, distances) {
    const n = cities.length;
    const visited = new Array(n).fill(false);
    visited[0] = true;
    const initialPath = [0];
    const { order, distance } = branchAndBoundHelper(0, initialPath, 0, Infinity);

    function branchAndBoundHelper(currentCity, path, currentDistance, bestDistance) {
        if (path.length === n) {
            return { order: path, distance: currentDistance + distances[currentCity][0] };
        }

        let minDistance = bestDistance;
        let minOrder = [];

        for (let nextCity = 0; nextCity < n; nextCity++) {
            if (!visited[nextCity]) {
                visited[nextCity] = true;
                const newPath = [...path, nextCity];
                const newDistance = currentDistance + distances[currentCity][nextCity];

                if (newDistance < minDistance) {
                    const result = branchAndBoundHelper(nextCity, newPath, newDistance, minDistance);
                    if (result.distance < minDistance) {
                        minDistance = result.distance;
                        minOrder = result.order;
                    }
                }

                visited[nextCity] = false;
            }
        }

        return { order: minOrder, distance: minDistance };
    }

    return { order, distance };
}

// Test case
const cities = ["A", "B", "C"];
const distances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0],
];

const result = tspBranchAndBound(cities, distances);
console.log("Branch and Bound Optimal Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Branch and Bound Optimal Distance:", result.distance);
