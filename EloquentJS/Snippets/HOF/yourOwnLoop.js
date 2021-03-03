function loop(num, test, update, body){
    for(let n= num; test(n); n = update(n)){
      body(n);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);