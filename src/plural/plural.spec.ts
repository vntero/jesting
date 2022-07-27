// import { plural } from './plural'
const plural = require('./plural')

test('Determine if a plural is needed or not', () => {
    expect(plural(1)).toBe(false)
})