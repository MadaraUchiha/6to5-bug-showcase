## Breakpoint bug with 6to5

This project is a minimal reproducible test case for failing breakpoints with 6to5.

To reproduce, clone this repository, run `npm install`, and set a breakpoint on line 13 of class.js.

## Expected result
Try to evaluate what `this` is at that point. The expected is the `MathStuff` object.

## Actual result
`this` is undefined, stepping over doesn't seem to do anything and the stack shows unrelated things entirely. 