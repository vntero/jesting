const between = require('./between.ts')

let a = 100
let z = 105

let output = [100, 101, 102, 103, 104, 105]

test('Return an array of numbers between the set given', ()=> {
    expect(between(a, z)).toEqual(output)
})