function toSentenceCase(sentence){
    let sentencecaseArr = sentence.split(" ");
    for(let i in sentencecaseArr){
      sentencecaseArr[i] = sentencecaseArr[i].split('');
      sentencecaseArr[i][0] = sentencecaseArr[i][0].toUpperCase();
      sentencecaseArr[i] = sentencecaseArr[i].join('');  
    }
    return sentencecaseArr.join(' ');
  }
  
  console.log(toSentenceCase("Hello world I am Soham"))