function minimumSpanningTree(graph) {
    const numVertices = graph.length;
    const parent = new Array(numVertices).fill(-1);
    const key = new Array(numVertices).fill(Infinity);
    const inMST = new Array(numVertices).fill(false);

    key[0] = 0;

    for (let count = 0; count < numVertices - 1; count++) {
        const u = minKey(key, inMST);
        inMST[u] = true;

        for (let v = 0; v < numVertices; v++) {
            if (graph[u][v] && !inMST[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    return parent;
}

function minKey(key, inMST) {
    const numVertices = key.length;
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < numVertices; v++) {
        if (!inMST[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }

    return minIndex;
}

function minimumWeightPerfectMatching(graph, parent) {
    const numVertices = graph.length;
    const edges = [];

    for (let i = 1; i < numVertices; i++) {
        edges.push([i, parent[i]]);
    }

    const matching = [];

    const visited = new Array(numVertices).fill(false);

    for (const [u, v] of edges) {
        if (!visited[u] && !visited[v]) {
            matching.push([u, v]);
            visited[u] = visited[v] = true;
        }
    }

    return matching;
}

function eulerianTour(graph, startVertex) {
    const tour = [];
    const stack = [startVertex];
    while (stack.length) {
        const currentVertex = stack.pop();
        tour.push(currentVertex);
        for (let i = graph[currentVertex].length - 1; i >= 0; i--) {
            if (graph[currentVertex][i] !== 0) {
                stack.push(i);
                graph[currentVertex][i] = graph[i][currentVertex] = 0; // Remove edge to avoid revisiting
            }
        }
    }
    return tour;
}

function christofidesTSP(cities, distances) {
    const numCities = cities.length;
    const minimumSpanningTreeGraph = minimumSpanningTree(distances);
    const matching = minimumWeightPerfectMatching(distances, minimumSpanningTreeGraph);
    const graph = Array(numCities).fill(null).map(() => Array(numCities).fill(0));

    for (const [u, v] of matching) {
        graph[u][v] = graph[v][u] = distances[u][v];
    }

    for (let i = 0; i < numCities; i++) {
        for (let j = 0; j < numCities; j++) {
            if (minimumSpanningTreeGraph[i] !== j) {
                graph[i][j] = distances[i][j];
            }
        }
    }

    const eulerianTourPath = eulerianTour(graph, 0);
    const visited = new Set();
    const hamiltonianTour = [];

    for (const vertex of eulerianTourPath) {
        if (!visited.has(vertex)) {
            hamiltonianTour.push(vertex);
            visited.add(vertex);
        }
    }

    hamiltonianTour.push(hamiltonianTour[0]);

    let totalDistance = 0;
    for (let i = 0; i < hamiltonianTour.length - 1; i++) {
        totalDistance += distances[hamiltonianTour[i]][hamiltonianTour[i + 1]];
    }

    return { order: hamiltonianTour, distance: totalDistance };
}

// Test case
const cities = ["A", "B", "C", "D"];
const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0],
];

const result = christofidesTSP(cities, distances);
console.log("Christofides Algorithm Order:", result.order.map((idx) => cities[idx]).join(" -> "));
console.log("Christofides Algorithm Distance:", result.distance);
