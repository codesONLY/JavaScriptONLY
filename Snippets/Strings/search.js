/**
 * search a word in the sentence and find out at which position it is found for first time.
 */

let jsLove = "Javascript is awesome. I am a Javascript lover. You have to experience this awesomeness";
let searchWord = "awesome";
console.log(searchWord + " found at " + (jsLove.search(searchWord) + 1) + " position"); // 14
