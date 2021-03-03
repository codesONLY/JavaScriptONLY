# [Episode 15](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17): Asynchronous JavaScript & EVENT LOOP from scratch 🔥

### JavaScript Behind the Scenes

Browser = JS Engine + Web APIs + Event Loop + Callback Queue + Microtask Queue + other stuff

JS Engine: It has a call stack. When a JS code is executed, all execution happens via Call Stack. Whatever is popped off the call-stack, is executed.

Web APIs: Web APIs are provided by Browser to do certain tasks. Such as: Timer (setTimeout() function), DOM APIs, fetch(), console(), localStorage etc. things. All are attached with Window object.

Callback Queue: In this all the async functions are lined up. Async Functions are pulled out of call stack when encountered; does processing and once the work is done, they are pushed inside the queue.

All the web APIs etc. are pushed in this.

Microtask Queue: This is of higher priority than the Callback Queue. It does same thing as Callback Queue. It contains the Callbacks relating to those of "Promises" and Mutations.

Event Loop: It is a Gate keeper. It keeps check that:
```
if(Call Stack === Empty && Callback Queue !== Empty){
    x = Callback Queue.pop()
    Call Stack.push(x);
}
else{
    wait(till Call Stack is not empty)
}
```



