let arr = [[1,2,3],[1,2],[1,2,4]]

arr.reduce((a,b) => a.concat(b));

// OR

function flatten(arrOfArr){
    return arrOfArr.reduce(function(resArr, nthArr){
        return resArr.concat(nthArr);
    }, []);
}