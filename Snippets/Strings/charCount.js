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
  
  charCount("Hello")