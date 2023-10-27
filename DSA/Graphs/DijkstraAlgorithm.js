const graphInfo = {
    source: {A: 4, B: 1},
    A: {C: 3, D: 5},
    B: {A: 7, D: 2},
    C: {D: 4, destination: 3},
    D: {destination: 2},
    destination: {}
  };
  
  // primary function
  const dijkstra = (graph) => {
  
    // shortest distance to each vertex
    const distance = Object.assign(
        {destination: Infinity}, graph.source);
  
    // display path
    const parentArray = {destination: null};
    for (let child in graph.source) {
      parentArray[child] = 'source';
    }
  
    // track vertexs that are marked
    const marked = [];
  
    let vertex = minimumDistancevertex(distance, marked);
  
    while (vertex) {
      let cost = distance[vertex];
      let children = graph[vertex];
      for (let n in children) {
        let latestDistance = cost + children[n];
        if (!distance[n]) {
          distance[n] = latestDistance;
          parentArray[n] = vertex;
        }
        if (distance[n] > latestDistance) {
          distance[n] = latestDistance;
          parentArray[n] = vertex;
        }
      }
      marked.push(vertex);
      vertex = minimumDistancevertex(distance, marked);
    }
  
    let shortestPath = ['destination'];
    let parent = parentArray.destination;
    while (parent) {
      shortestPath.push(parent);
      parent = parentArray[parent];
    }
    shortestPath.reverse();
  
    const result = {
      distance: distance.destination,
      path: shortestPath
    };
  
    return result;
  };

  const minimumDistancevertex = (distance, marked) => {
    return Object.keys(distance).reduce((lowest, vertex) => {
      if (lowest === null || distance[vertex] < distance[lowest]) {
        if (!marked.includes(vertex)) {
          lowest = vertex;
        }
      }
      return lowest;
    }, null);
  };

  console.log(dijkstra(graphInfo));