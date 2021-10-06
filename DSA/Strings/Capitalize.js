// Convert a sentence to title case using Javascript
// example: Input: this is a phrase
// Output: This Is A Phrase
  
const toTitleCase = (sentence) =>{
    let words = sentence.split(' ');
    let capitalizedSentence='';
    words.forEach((word)=>{
        capitalizedSentence += String(word).charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
    
    return capitalizedSentence.trim();
}
const sentence = 'this is a phrase'

console.log(toTitleCase(sentence));