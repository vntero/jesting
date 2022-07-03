const isDivisible = require('./isDivisible.ts')

let input = 10
let a = 2
let b = 5

test(`Number ${input} is divisible by ${a} and ${b}`, () => {
    expect(isDivisible(input, a, b)).toBe(true)
})