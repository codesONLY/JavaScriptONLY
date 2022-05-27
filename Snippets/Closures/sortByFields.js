let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

// Normal Approach will be
//users.sort((a, b) => (a.name > b.name ? 1 : -1));
//users.sort((a, b) => (a.age > b.age ? 1 : -1));

// cleaner way
const byField = (fieldName) => {
  return function (x, y) {
    return x[fieldName] > y[fieldName] ? 1 : -1;
  };
};

console.log(users.sort(byField("age")));
