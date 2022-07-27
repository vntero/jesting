import { plural } from './plural'

test('Determine if a plural is needed or not', () => {
    expect(plural(5)).toBe(true)
})