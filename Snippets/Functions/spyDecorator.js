function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

function spy(func) {
  wrapper.calls = [];
  function wrapper(...args) {
    const key = hash(args);
    func.call(this, ...args);
    wrapper.calls.push(key);
  }

  return wrapper;
}

const hash = (args) => {
  return args.join();
};

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work);

for (let args of work.calls) {
  console.log("call:" + args); // "call:1,2", "call:4,5"
}
