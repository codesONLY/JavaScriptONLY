function findMax(...args){
    let max = -Infinity;
    for(let i=0; i<args.length; i+=1){
      if(args[i] >= max){
        max = args[i]
      }
    }
    return max;
  }
  
  const maximum = findMin(3,2,4,5,-2)
  console.log(maximum)