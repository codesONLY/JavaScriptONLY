let delay = 5000;

let timerId = setTimeout(function request() {
  console.log("Send Request to server", delay);
  if (true) {
    // request failed due to server overload
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);
}, delay);
