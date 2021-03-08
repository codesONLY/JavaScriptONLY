# [Episode 16](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=18): TRUST ISSUES with setTimeout()

### setTimeout() doesn't guarantee that it will exactly wait for X seconds

* Why? Because suppose you have a timer of 5000ms. And after that the callback must be executed. 

* So, the Callback will go in the Web API waiting window. 

* Since JS waits for none, it continues its execution and call stack is filled with the other code.

* Suppose we have a million lines of code in the program.

* The Main Thread will be blocked for executing those million lines.

* Suppose those million lines take 10s to execute. Our callback has already completed the timeout of 5s and is waiting inside the Callback Queue.

* But we know that ONLY after the Call Stack is empty, the Callback queue can be emptied. And thus the Call Stack is being emptied after 10s.

* Our expected waiting time was 5s in the time out but since the code takes 10s, it will execute the setTimeout() callback after the 10s only.

* Thus it is not necessary that it will take exactly Xs that is defined in the setTimeout.

* But it is certain that it will take ATLEAST 5s for the callback to execute and will wait there.

### setTimeout(cb,0)

* What happens when the delay = 0? 
* Will it behave synchronously? No.
* The setTimeout() is async Web API function and thus has to go through process of the Callback Queue and thus it will ONLY execute after the Main thread is executed and callback is empty.
* It can be used to defer the code; i.e. if we want some code to execute at last of the code, we can use settimeout with 0s delay.
