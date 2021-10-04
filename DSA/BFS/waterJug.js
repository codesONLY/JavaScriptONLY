// Defining constants. 
const ACTION_FILL_X = -1
const ACTION_FILL_Y = -2
const ACTION_EMPTY_X = -3
const ACTION_EMPTY_Y = -4
const ACTION_POUR_FILL_X = -5
const ACTION_POUR_FILL_Y = -6
const ACTION_POUR_EMPTY_X = -7
const ACTION_POUR_EMPTY_Y = -8

function getChildren(node, m, n) {
  const results = [];
  const {x, y} = node.state;
  if (x < m)
    results.push({
      x: m,
      y,
      action: ACTION_FILL_X
    });
  if (y < n)
    results.push({
      x,
      y: n,
      action: ACTION_FILL_Y
    });
  if (x > 0)
    results.push({
      x: 0,
      y,
      action: ACTION_EMPTY_X
    });
  if (y > 0)
    results.push({
      x,
      y: 0,
      action: ACTION_EMPTY_Y
    });
  if (x + y >= m && y > 0)
    results.push({
      x: m,
      y: x + y - m,
      action: ACTION_POUR_FILL_X
    });
  if (x + y >= n && x > 0)
    results.push({
      x: x + y - n,
      y: n,
      action: ACTION_POUR_FILL_Y
    });
  if (x + y <= m && y >= 0)
    results.push({
      x: x + y,
      y: 0,
      action: ACTION_POUR_EMPTY_Y
    });
  if (x + y <= n && x >= 0)
    results.push({
      x: 0,
      y: x + y,
      action: ACTION_POUR_EMPTY_X
    });
  return results;
}

function solve(m, n, d) {
  // The final state to achieve.
  const goal = { x: d, y: 0 };
  // Starting from the topmost row of the matrix.
  // Initiating the first state and node
  const initialState = {
    x: 0,
    y: 0
  };
  const initialNode = {
    state: initialState,
    parent: null,
    action: null,
  };
  // For BFS, we use a Queue data type, FIFO.
  let frontier = [initialNode];

  while (frontier.length != 0) {
    // Getting the first node in the frontier.
    const node = frontier[0];
    frontier = frontier.slice(1);
    // Checking if the node represents an element in the last row.
    // If so, then add it to the goal state list and continue.
    if (node.state.x == goal.x) {
      printSolution(node);
      break;
    }

    // If it is not the goal state, we can get certain actions we can perform.
    // Get all available actions the current node have.
    const children = getChildren(node, m, n);

    for (let j = 0; j < children.length; j++) {
      const result = children[j];
      const childState = {
        x: result.x,
        y: result.y,
      };
      const child = {
        state: childState,
        parent: node,
        action: result.action,
      };
      // Add this node to the frontier.
      frontier.push(child);
    }
  }
}

function printSolution(node) {
  const nodes = [];
  while (node.parent != null) {
    nodes.push(node);
    node = node.parent;
  }
  nodes.push(node);
  nodes.reverse();
  let answer = "{";
  for (let i = 0; i < nodes.length; i++) {
    answer += `(${nodes[i].state.x}, ${nodes[i].state.y})`;
    if (i !== nodes.length - 1)
      answer += ', ';
  }
  answer += "}";
  console.log(answer);
}

(() => {
  const [m, n, d] = [4, 3, 2];
  solve(m, n, d);
})();