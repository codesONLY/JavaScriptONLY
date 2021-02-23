function findMin(...args){
    let min = Infinity;
    for(let i=0; i<args.length; i+=1){
      if(args[i] <= min){
        min = args[i]
      }
    }
    return min;
  }
  
  const minimum = findMin(3,2,4,5,-2)
  console.log(minimum)