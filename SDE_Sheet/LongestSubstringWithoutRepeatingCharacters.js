class Solution {
    public int lengthOfLongestSubstring(String s) {
         int maxl = 0;
        Map<Character, Integer> charIdxMap = new HashMap<Character, Integer>(); //O(1) space
        
        char c;
        int startIdx = 0;
        int i;
        for(i=0; i<s.length(); i++){ //O(N) time
            c = s.charAt(i);
            if(charIdxMap.getOrDefault(c, -1) >= startIdx){
                maxl = Math.max(maxl, i-startIdx);
                startIdx = charIdxMap.get(c) + 1;
            }
            
            charIdxMap.put(c, i);
        }
        
        maxl = Math.max(maxl, i-startIdx);
        
        return maxl;
    }
}
