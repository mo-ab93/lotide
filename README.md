# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mohammed_abbas93/lotide`

**Require it:**

`const _ = require('@mohammed_abbas93/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: function for arrays is to retrieve the first element from the array.
* `tail(...)`: function for arrays is to retrieve "tail" of an array.
* `middle(...)`: function for arrays is to retrieve middle of an array.
* `without(...)`: function without can removing some unwanted items.
* `takeUntil(...)`: function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `map(...)`: function will return a new array based on the results of the callback function.
* `letterPositions(...)`: function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
* `flatten(...)`: Given an array with other arrays inside, function can flatten it into a single-level array.
* `findKeyByValue(...)`: function scan the object and return the first key which contains the given value.
* `findKey(...)`: function that scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `eqObjects(...)`: function eqObjects which will take in two objects and returns true or false, based on a perfect match.
* `eqArrays(...)`: function that can compare two arrays for a perfect match.
* `countOnly(...)`: function should take in a collection of items and return counts for a specific subset of those items. 
* `countLetters(...)`:function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `assertObjectsEqual(...)`: function will take in two objects and console.log an appropriate message to the console.
* `assertEqual(...)`: function to help us test our code.
* `assertArraysEqual(...)`: function for asserting that two arrays are equal.
