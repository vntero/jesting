const multiplier = require('./paperwork')

const a = 10
const b = 55
const c = 550

test('Test if the numbers received multiply with each other', () => {
    expect(multiplier(a, b)).toBe(c)
})