function wordCounter(sentence){
    return sentence.split(" ").length;
  }
  
  const words = wordCounter("We are neogrammers");
  console.log(words)