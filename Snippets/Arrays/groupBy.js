const arr = [6.1, 2.4, 2.7, 6.8];

function groupBy(arr, property) {
  const groupByString = (arr, query) => {
    let res = {};

    arr.forEach((item, index) => {
      const queryList = query.split(".");

      let currKey;
      let currItem = item;
      let count = 0;
      for (let i = 0; i < queryList.length; i++) {
        currKey = queryList[i];
        if (!currItem[currKey]) {
          break;
        } else {
          count += 1;
          currItem = currItem[currKey];
        }
      }

      if (count !== queryList.length) {
        currItem = undefined;
      }
      if (!res[currItem]) {
        res[currItem] = [item];
      } else {
        res[currItem].push(item);
      }
    });
    return res;
  };
  const groupByCallback = (arr, cb) => {
    let res = {};
    arr.forEach((item) => {
      const ans = cb.call(null, item);

      if (Object.keys(res).includes(ans.toString())) {
        res[ans].push(item);
      } else {
        res[ans] = [item];
      }
    });
    return res;
  };

  let res;
  switch (typeof property) {
    case "function":
      res = groupByCallback(arr, property);
      break;
    case "string":
      res = groupByString(arr, property);
      break;
    default:
      return new Error("Invalid Property Type");
  }

  return res;
}

// groupBy(arr, Math.floor);
console.log(groupBy(arr, Math.ceil));
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));
console.log(
  groupBy(
    [{ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }],
    "b.a.c"
  )
);

console.log(
  groupBy(
    [{ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }],
    "a.b.c"
  )
);

// alternate solution
function groupByAlternative(collection, property) {
  const output = {};

  if (!collection || typeof collection !== "object") {
    return output;
  }

  const isPropertyFunction = typeof property === "function";
  const isPropertyPath = typeof property === "string";

  for (const value of Object.values(collection)) {
    let current = undefined;

    if (isPropertyFunction) {
      current = property(value);
    } else if (isPropertyPath) {
      // a.b.c -> [a, b, c];
      const path = property.split(".");
      let i;
      let currentKey;
      let currentItem = value; // { a: { b: { c: 1 } } }

      for (i = 0; i < path.length; i++) {
        // [a, b, c] -> currentKey: path[0] -> a
        // [a, b, c] -> currentKey: path[1] -> b
        // [a, b, c] -> currentKey: path[2] -> c
        currentKey = path[i];

        if (!currentItem[currentKey]) {
          currentItem = undefined;
          break;
        }
        currentItem = currentItem[currentKey];
      }

      current = currentItem;
    }

    output[current] = output[current] || [];
    output[current].push(value);
  }

  return output;
}
