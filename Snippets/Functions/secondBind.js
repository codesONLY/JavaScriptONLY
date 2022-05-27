// A function cannot be re-bound
function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" });
z = f.bind({ name: "Ann" });

f(); // John
z(); // John
