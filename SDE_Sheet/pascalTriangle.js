/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let firstCol = [1];
    let secondCol = [1,1]

    if(numRows === 1){
        return [firstCol];
    }
    if(numRows === 2){
        return [firstCol,secondCol]
    }
    
    let res = [firstCol, secondCol];
    
    for(let i=0; i < numRows - 2; i++){
        let temp = [...res].pop()
        let col = []
        for(let j=0; j < temp.length-1; j++){
            col.push(temp[j]+temp[j+1]) 
        }
        res.push([1, ...col, 1])
    }
    return (res);
    
};