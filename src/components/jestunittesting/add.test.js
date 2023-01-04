
const add = require("./add");

test("Properly add two numbers", () => {
  expect(add(7, 6)).toBe(13);

}); 

const sub = require("./sub");

test("Properly sub two numbers", () => {
  expect(sub(7, 6)).toBe(1);

}); 

const mul = require("./mul");

test("Properly mul two numbers", () => {
 expect(mul(2, 3)).toBe(6);

}); 


const div = require("./div");

 test("Properly div two numbers", () => {
  expect(div(10, 5)).toBe(2);

}); 


const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})