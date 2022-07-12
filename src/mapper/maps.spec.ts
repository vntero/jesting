const maps = require('./maps')

let before = [1, 2, 3, 4]

let after = [2, 4, 6, 8]

test('Checks if before is double in after', () => {
    expect(maps(before)).toEqual(after)
})
