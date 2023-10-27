const maze = [
    ['S', 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 'E'],
];


function solveMazeDFS(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    function dfs(x, y) {
        if (x < 0 || x >= rows || y < 0 || y >= cols || maze[x][y] === 1) {
            return false;
        }

        if (maze[x][y] === 'E') {
            return true; // Reached the end of the maze
        }

        maze[x][y] = 1; // Mark as visited

        // Explore in all four directions (up, down, left, right)
        if (dfs(x + 1, y) || dfs(x - 1, y) || dfs(x, y + 1) || dfs(x, y - 1)) {
            return true;
        }

        maze[x][y] = 0; // Mark as unvisited if no path was found
        return false;
    }

    // Find the start point
    let startX, startY;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                startX = i;
                startY = j;
                break;
            }
        }
    }

    // Call DFS from the start point
    if (dfs(startX, startY)) {
        return "Maze is solvable.";
    } else {
        return "Maze has no solution.";
    }
}

console.log(solveMazeDFS(maze));




function solveMazeBFS(maze) {
    const rows = maze.length;
    const cols = maze[0].length;
    const queue = [];

    // Find the start point
    let startX, startY;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                startX = i;
                startY = j;
                break;
            }
        }
    }

    // Define possible moves (up, down, left, right)
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    queue.push([startX, startY]);

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        if (maze[x][y] === 'E') {
            return "Maze is solvable.";
        }

        maze[x][y] = 1; // Mark as visited

        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0) {
                queue.push([newX, newY]);
            }
        }
    }

    return "Maze has no solution.";
}

console.log(solveMazeBFS(maze));


class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().element;
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function heuristic(x1, y1, x2, y2) {
    // A simple heuristic function (Manhattan distance)
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function solveMazeAStar(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    // Find the start and end points
    let startX, startY, endX, endY;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                startX = i;
                startY = j;
            } else if (maze[i][j] === 'E') {
                endX = i;
                endY = j;
            }
        }
    }

    const openSet = new PriorityQueue();
    openSet.enqueue({ x: startX, y: startY, cost: 0 }, 0);

    const cameFrom = {};
    const gScore = {};

    gScore[`${startX}-${startY}`] = 0;

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue();
        const { x, y } = current;

        if (x === endX && y === endY) {
            // Reconstruct the path
            const path = [];
            let currentNode = { x: endX, y: endY };
            while (currentNode) {
                path.unshift(currentNode);
                currentNode = cameFrom[`${currentNode.x}-${currentNode.y}`];
            }
            return path;
        }

        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const newX = x + dx;
            const newY = y + dy;

            if (
                newX >= 0 &&
                newX < rows &&
                newY >= 0 &&
                newY < cols &&
                maze[newX][newY] !== 1
            ) {
                const tentativeGScore = gScore[`${x}-${y}`] + 1;

                if (
                    !gScore[`${newX}-${newY}`] ||
                    tentativeGScore < gScore[`${newX}-${newY}`]
                ) {
                    cameFrom[`${newX}-${newY}`] = { x, y };
                    gScore[`${newX}-${newY}`] = tentativeGScore;
                    const fScore =
                        tentativeGScore + heuristic(newX, newY, endX, endY);
                    openSet.enqueue({ x: newX, y: newY, cost: fScore }, fScore);
                }
            }
        }
    }

    return "Maze has no solution.";
}

const path = solveMazeAStar(maze);

if (path !== "Maze has no solution.") {
    console.log("Path found:");
    path.forEach((cell, index) => {
        console.log(`Step ${index + 1}: (${cell.x}, ${cell.y})`);
    });
} else {
    console.log("Maze has no solution.");
}
