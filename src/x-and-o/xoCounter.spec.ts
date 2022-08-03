const xo = require('./xoCounter')

let str = 'XxXOoO'

test('How many Xs and Os are there?', () => {
    expect(xo(str)).toBe(true)
})