async function first() {
  try {
    // return await second(); // remains synchronous for the function if used await
    return second(); //asynchronous returning the function
  } catch (err) {
    console.log("Try/Catch", err);
  }
}

function second() {
  return Promise.reject("Something went wrong!");
}

first()
  .then(() => {
    console.log("End");
  })
  .catch((err) => {
    console.log("From .catch()", err);
  });
