// Implementation 1
const getData = () => {
    console.log("Fetching Data...");
};

const throttle = (func, limit) => {
    let flag = true
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag=true;
            }, limit);
        }
            
    }
}

// Implementation 2

const throttle2 = (func, limit) => {
    let last = new Date().getTime();
    return function(){
        let curr = new Date().getTime();
        if(curr - last < limit){
            return
        }
        last = current;
        return func(...args); 
    }
}

const betterThrottle = throttle(getData, 300);