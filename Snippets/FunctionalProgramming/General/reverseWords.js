function reverseCharactersOfAWord(sentence){
    let sentenceArr = sentence.split(' ');
    for(word in sentenceArr){
      console.log(word)
      sentenceArr[word] = (reverseArray(sentenceArr[word].split(''))).join('');
    } 
    return sentenceArr.join(' ');
  
  }
  
  function reverseArray(arr){
    console.log(arr);
    let ret = new Array;
    for(let i=arr.length-1;i >=0; i--){
      ret.push(arr[i]);
    }
    return ret;
  }
  
  console.log(reverseCharactersOfAWord("Soham Shah"))