// Javascript code for the above approach

// returns a substring that contains the maximum odd number at its end
function maxOdd(s) {
	
    // Loop through the string backwards, starting from the end
    for (let i = s.length - 1; i >= 0; i--) {
        
    // Check if the current character is odd
    if (parseInt(s.charAt(i)) % 2 !== 0) {
        
    // If it is, return the substring that contains
    // all the characters up to and including the current character
    return s.substring(0, i + 1);
    }
    }
    
    // If no odd number is found in the string, return an empty string
    return '';
    }
    
    // driver function
    
    const s = '504';
    // function call
    const ans = maxOdd(s);
    console.log(ans);
    
    // This code is contributed by Vaibhav Nandan.
    