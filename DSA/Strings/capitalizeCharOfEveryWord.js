function capitalizeWords(inputString) {
  const words = inputString.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      const firstChar = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstChar + restOfWord;
    }
    return word;
  });

  return capitalizedWords.join(" ");
}

// Example usage:
const inputText = "i am vinayak.";
const capitalizedText = capitalizeWords(inputText);
console.log(capitalizedText);
