function replaceChar(str,c1,c2){
    let regex = new RegExp(c1,"g");
    console.log(regex)
    let ans = str.replace(regex,'2');
    return ans
  }
  
  console.log(replaceChar("Soham       is a good guy", "o","d"));