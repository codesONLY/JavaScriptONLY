const compareSets = (a, b) => a.size === b.size && [...a].every(e => b.has(e))

function shortestSubstring(s) {
    let len = s.length
    let uniqueChars = new Set(Array.from(s))
    let subString = ''
    let mLen = len + 1;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            subString = subString + s[j]
            if (compareSets(new Set(subString), uniqueChars)) {
                if (mLen > subString.length) {
                    mLen = subString.length
                }
                break;
            }
        }
        subString = ''
    }
    return mLen
}

console.log(shortestSubstring('bcaacbc'))
