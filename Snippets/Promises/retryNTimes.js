// wait function
const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

const retryWithDelay = (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry Failed"
) => {
  return new Promise((resolve, reject) =>
    operation()
      .then(resolve)
      .catch((reason) => {
        console.log(retries);
        if (retries > 0) {
          return wait(delay)
            .then(
              retryWithDelay.bind(null, operation, retries - 1, delay, finalErr)
            )
            .then(resolve)
            .catch(reject);
        }
        // throw final error
        return reject(finalErr);
      })
  );
};

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;

    if (callCounter) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10, 1000);
  console.log("success");
};

// Print the result
test().catch(console.error);
