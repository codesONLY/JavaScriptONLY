function list() {
    console.log(arguments);
    return Array.prototype.slice.call(arguments);
  }
  
  const lis = list(1,2,3)
  console.log(lis)