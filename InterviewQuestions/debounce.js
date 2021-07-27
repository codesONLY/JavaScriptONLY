// Implementation 1
const getData = () => {
    console.log("Fetching Data...");
  };

  const debounce = (fn, delay) => {
    // returns a function that calls getData() only when x ms delay is observed
    let timer;
    return function () {
      // call getData after some interval x
      let context = this;
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  const debounceFunction = debounce(getData, 1000);

  // Implementation 2

  function debounce(delay, func){
    let timeoutID = null;
  
    return function(...args){
      if(timeoutID){
        clearTimeout(timeoutID);
      }
  
      timeoutID = setTimeout(() => func(...args), delay);
    }
  }