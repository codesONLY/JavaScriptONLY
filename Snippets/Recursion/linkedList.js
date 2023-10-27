let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (obj) => {
  console.log(obj.value);
  if (obj.next !== null) {
    printList(obj.next);
  }
};

console.log(printList(list));
