const descendingOrder = require('./sorter')

const input = 12345
const output = 54321

test('Sort an array of integers', () => {
    expect(descendingOrder(input)).toBe(output)
})