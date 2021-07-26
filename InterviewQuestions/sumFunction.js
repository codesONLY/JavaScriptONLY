let sum = function(a){
    return function(b){
      if(b === undefined){
        return a;
      }
      return sum(a+b);
    }
  }
  
console.log(sum(1)(2)(10)(5)())