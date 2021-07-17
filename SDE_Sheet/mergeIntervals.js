/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
     var res = []
 
     var tempInterval = intervals[0]
     for(let i=0; i < intervals.length; i++){
       if(tempInterval[1] >= intervals[i][0]){
         tempInterval[1] = Math.max(intervals[i][1], tempInterval[1])
       } else{
         res.push(tempInterval)
         tempInterval = intervals[i]
       }
     }
     res.push(tempInterval) 
     return res  
 };