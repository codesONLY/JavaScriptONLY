const ACTION_RIGHT = 100;
const ACTION_LEFT = -100;

function getChildren(x, y, n) {
  const results = [];
  if (x != n - 1 && y != 0) {
    results.push({
      x: x + 1,
      y: y - 1,
      action: ACTION_LEFT,
    });
  }
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
  const goalList = [];
  for (let i = 0; i < matrix.length; i++) {
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
    let frontier = [initialNode];

    while (frontier.length != 0) {
      const node = frontier.pop();
      if (node.state.x == matrix.length - 1) {
        goalList.push(node);
        continue;
      }

      const children = getChildren(node.state.x, node.state.y, matrix.length);

      for (let j = 0; j < children.length; j++) {
        const result = children[j];
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
        frontier.push(child);
      }
    }
  }

  goalList.sort((n1, n2) => n2.state.sum - n1.state.sum);
  console.log(goalList[0].state.sum);
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
  const matrix = [
    [5, 10, 75, 20, 76],
    [4, 5, 8, 50, 32],
    [80, 42, 0, 3, 4],
    [82, 73, 7, 58, 45],
    [45, 24, 13, 86, 0],
  ];
  printMatrix(matrix);
  solve(matrix);
})();
