let user = {
  name: "John",
};

// get property
let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);

// define property
Object.defineProperty(user, "name", {
  value: "Soham",
});

// non-writable
Object.defineProperty(user, "name", {
  writable: false,
});

// non-enumerable

Object.defineProperty(user, "toString", {
  enumerable: false,
});

// non-configurable

Object.defineProperty(user, "name", { configurable: false });

// cannot even change other ennumberable and writable
