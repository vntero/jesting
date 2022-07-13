const speedConverter = require('./cockroachSpeed')

let kmPerHour = 23
let cmPerSec = 639

test('Convert a given value of km/hour to cm/sec', () => {
    expect(speedConverter(kmPerHour)).toBe(cmPerSec)
})