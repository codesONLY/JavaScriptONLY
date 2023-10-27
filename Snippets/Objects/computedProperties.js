const obj = {};

for (let i = 0; i < 10; i++) {
  obj[`field${i}`] = 1;
}

console.log(obj);

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
