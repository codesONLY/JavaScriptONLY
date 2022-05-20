async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return 10;
}

function f() {
  // get value from the promise by calling async code in sync func
  wait().then((value) => console.log(value));
}

f();
