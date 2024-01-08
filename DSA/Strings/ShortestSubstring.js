// This function compares two sets 'a' and 'b' to check if they have the same elements.
// It returns true if the sets have the same elements, and false otherwise.
const compareSets = (a, b) => a.size === b.size && [...a].every(e => b.has(e))

// This function, 'shortestSubstring', calculates the length of the shortest substring
// in the input string 's' that contains all unique characters present in the original string.
function shortestSubstring(s) {
    let len = s.length; // Get the length of the input string.
    let uniqueChars = new Set(Array.from(s)); // Create a set of unique characters from the input string.
    let subString = ''; // Initialize an empty substring.
    let mLen = len + 1; // Initialize 'mLen' to be greater than the length of the input string.

    // Nested loops to find all possible substrings.
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            subString = subString + s[j]; // Add characters to the current substring.
            
            // Check if the unique characters of the current substring match the unique characters of the input string.
            if (compareSets(new Set(subString), uniqueChars)) {
                if (mLen > subString.length) {
                    mLen = subString.length; // Update 'mLen' if a shorter valid substring is found.
                }
                break; // Exit the inner loop once a valid substring is found.
            }
        }
        subString = ''; // Reset the current substring for the next iteration.
    }

    return mLen; // Return the length of the shortest valid substring.
}

console.log(shortestSubstring('bcaacbc')); // Example usage of the function.
