# [Episode 16](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=18): JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 

### JavaScript Runtime Environment

JRE: JS Engine + Web APIs + Callback Queues + Microtask Queues + Event Loop and more interesting things.

There are various JREs. Most common is the Browser. 

Node.js is the Runtime Environment that has everything required as a runtime and can be ran outside the browser as well.

### Various JS Engines:

First JS engine developed was SpiderMonkey. SpiderMonkey is the engine used by Mozilla Firefox.

Fastest JS Engine currently is V8. V8 is used by chrome, Node.js and Deno as well.

Other engines are Chakra, Tamarin etc.

### JS Engine:

JS Engine is the heart of JRE.

It executes JS code.

It majorly contains two things: Call Stack and Memory Heap.

It executes the JS code in 3 steps.

1. Parsing: First the JS engine converts the JS code into tokens. Then it converts it into "Abstract Syntax Tree" known as AST. It is basically a syntax parser. Refer [this](https://astexplorer.net/)

2. Compilation: JavaScript has JIT Compilation i.e. Just In Time Compilation. It uses both Interpreter and Compiler for compilation of the code. All JS Engines have own algorithms of compilations. All these JS engine's job is to optimize the code as much as it can. 

3. Execution: Memory Heap is space where functions and vars are assigned memory and works in sync with the Call stack. Mark and Sweep Algorithm is famous garbage collector algorithm. Inlining, Copy Elision, Inline Caching etc. are imp compiler concepts.

### V8 Engine

V8 Interpreter: Ignition -> Byte Code
V8 compiler: TurboFan -> Creates Optimized Machine Code -> Byte code

Compiler Optimizes and Interpreter executes.

Garbage collector: Orinoco, Oilpan


