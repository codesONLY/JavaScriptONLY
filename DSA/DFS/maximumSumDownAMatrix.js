/*
 * This is a simple Depth-First Search Algorithm.
 *
 * You are provided with a square matrix with integer values.
 * The task is to find the maximum sum using the integers in the matrix,
 * starting from the first row and ending in the last row, such that you
 * can only move diagonally left or diagonally right.
 * 
 * If you have a 4x4 matrix:
 * 1  7  3  6
 * 1  2  9  4
 * 9  8  5  7
 * 4  5  2  1
 * 
 * The path that you will have to find is:
 *    7
 *       9
 *    8
 * 4
 * 
 * 7 + 9 + 8 + 4 = 28.
 */


// Defining constants. 
const ACTION_RIGHT = 100;
const ACTION_LEFT = -100;

function getChildren(x, y, n) {
  const results = [];
  // Checking if the values aren't at the left edge of the matrix
  if (x != n - 1 && y != 0) {
    results.push({
      x: x + 1,
      y: y - 1,
      action: ACTION_LEFT,
    });
  }
  // Checking if the values aren't at the right edge of the matrix
  if (x != n - 1 && y != n - 1) {
    results.push({
      x: x + 1,
      y: y + 1,
      action: ACTION_RIGHT,
    });
  }
  return results;
}

function solve(matrix) {
  // The list of nodes that are in the bottom of the matrix.
  const goalList = [];
  // Starting from the topmost row of the matrix.
  for (let i = 0; i < matrix.length; i++) {
    // Initiating the first state and node
    const initialState = {
      sum: matrix[0][i],
      x: 0,
      y: i,
    };
    const initialNode = {
      state: initialState,
      parent: null,
      action: null,
    };
    // For DFS, we use a Stack data type, LIFO.
    let frontier = [initialNode];

    while (frontier.length != 0) {
      // Getting the last node in the frontier.
      const node = frontier.pop();
      // Checking if the node represents an element in the last row.
      // If so, then add it to the goal state list and continue.
      if (node.state.x == matrix.length - 1) {
        goalList.push(node);
        continue;
      }

      // If it is not the goal state, we can get certain actions we can perform.
      // Get all available actions the current node have.
      const children = getChildren(node.state.x, node.state.y, matrix.length);

      for (let j = 0; j < children.length; j++) {
        const result = children[j];
        // Record the cummulative sum and initialise a child state.
        const newSum = node.state.sum + matrix[result.x][result.y];
        const childState = {
          sum: newSum,
          x: result.x,
          y: result.y,
        };
        const child = {
          state: childState,
          parent: node,
          action: result.action,
        };
        // Add this state to the frontier.
        frontier.push(child);
      }
    }
  }

  // After collecting all the goal states, sort them in decreasing order.
  goalList.sort((n1, n2) => n2.state.sum - n1.state.sum);
  // The first element with the sum will be the answer.
  return goalList[0].state.sum;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let s = "";
    for (let j = 0; j < matrix[i].length; j++) {
      s += `${matrix[i][j]}\t`;
    }
    console.log(`\n${s}`);
  }
}

(() => {
  // Initial driver code.
  const matrix = [
    [5, 10, 75, 20, 76],
    [4, 5, 8, 50, 32],
    [80, 42, 0, 3, 4],
    [82, 73, 7, 58, 45],
    [45, 24, 13, 86, 0],
  ];
  printMatrix(matrix);
  const answer = solve(matrix);
  console.log(answer);
})();

/*
 * Explanation:
 * 
 * State: it's the attributes that is required related to the problem.
 * Action: it's the constant that defines how different nodes are connected.
 * Node: it contains the current state, the action taken to reach that state, and the parent node.
 * Frontier: A Stack which contains all the nodes and to be used while searching.
 * 
 * We start with the inital node in the frontier and start a loop.
 * We pop out the last node and check if it is the goal state and perform some action.
 * If it is not a goal state, we will get all available actions that node currently have and iterate through them.
 * Using the actions, we will create successive states and add them to the frontier.
 * This process will continue till the frontier is empty. Hence, we can perform some final code to get the answer.
 */