function charCount(str){
    let dict = {}
    for(const c of str){
      if(c in dict){
        dict[c]+=1
      }else{
        dict[c] = 1
      }
    }
    return dict
  }
  
  const ans = charCount("Hello")
  
  // Most repeated character
  
  let max = {value:-Infinity};
  
  for(let i of Object.keys(ans)){
    if(ans[i] > max.value){
      max = {value:ans[i], key:i}
    }
  
  }
  
  console.log(max.key)