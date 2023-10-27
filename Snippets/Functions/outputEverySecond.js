function printNumbers(from, to) {
  const timerId = setInterval(
    function f(to) {
      console.log(from);
      if (to === from) {
        clearInterval(timerId);
      }
      from = from + 1;
    },
    1000,
    to
  );
}

printNumbers(1, 10);

// with nested setTimeout

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);

// runs immediately
function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);
