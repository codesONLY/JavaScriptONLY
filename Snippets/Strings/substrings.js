function substring(str){
    let arr = []
    for(let i=1; i<=str.length;i++){
      let temp = "";
      for(let j=0; j<=str.length-i;j++){
        temp+=str[j];
      }
      arr.push(temp);
    }
    console.log(arr)
    
  }
  
  console.log(substring("1234567"))