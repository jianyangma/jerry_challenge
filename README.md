# Jerry Take Home Assignment

This project is written in JavaScript and tested with Jest.

---

## The implementation

I implemented a binary search with bisectLeft and bisectRight.
To keep track of the start and end, a tracking array of integers is used. This array consists of a number of sorted pairs of start and end values. Therefore it will always have an even number of elements.

The add function checks if either the leftmost and rightmost are even. If it is, then that means it's currently outside the range of start and end, therefore this index is included in the tracking array.

The remove function checks if either the leftmost and rightmost are odd. If it is, then that means it's currently inside the range of start and end, therefore this index is included in the tracking array.

<div style="padding-top: 3rem;"></div>

# Instructions

## Install your dependencies

`npm install`

---

## Run all thets

`npm test`
