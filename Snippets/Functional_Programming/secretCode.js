function secretCode(string,n){
    let temp = string.split('');
    for(let i=0; i< temp.length;i+=1){
    temp[i] = String.fromCharCode((string.charCodeAt(i)+(n%26)))
    }
    return temp.join('');
  }
  
  secretCode("neogcamp",2)