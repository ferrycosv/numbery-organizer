# Numbery Organizer

A very fun set of exercises.  You will practice:

* Using built-in array methods to filter, map & reduce
* Using `this`
* Writing methods that read and write from object data
* Working with type coercion (Strings & Numbers)
* Understanding test cases
* TDD: Test early and test often

---

## Practice Problems

> [./practice-problems](./practice-problems)

The first part of these exercises is a series of pure functions for you to solve.  In these you will need to work with type coercion between numbers & strings, avoiding side-effects, and using native array methods.  The logic to this first set of exercises is very similar to what you will need for the Numbery Organizer but in a simpler format (pure functions instead of an object).  Taking your time to fully understand the practice problems will help to solve the Number Organizer

---

## TDD: Numbery Organizer Object

> [`./object.js'](./object.js) & [`./tests`](./tests)

The second part of these exercises is meant to be studied in the browser. You will need to write the logic for an object that stores strings, sorted by Numberyness & NaNyness.  The logic to solving this exercise is very similar to what you needed to pass the practice problems, what will be new is using `this` to read and write from properties in an object.

To complete this exercise clone this repository, open the `index.html` locally in your browser, and start coding.  Each time you make a change in the object, refresh your browser to see how you did!  Here are some ideas you can try to help debug your object:

* __Set your DevTools to pause on caught exceptions__: this will pause your debugger _before_ the error occurs so you can inspect what was in memory that caused the error.
* __Set Breakpoints in your DevTools__: In the `sources` tab of your devtools, click on the line number that is causing you trouble.  The program will pause there for you to inspect memory.
* __Use `debugger;` statements__: This is very similar to breakpoints, but written into the source code.  Breakpoints exist only in the browser you are currently using, debugger statements will pause your code anywhere.
