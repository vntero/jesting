const abbrevName = require('./abbreviator');

let givenName = 'Hugo Antero'
let initialsName = 'H.A'

test(`Converts ${givenName} to ${initialsName}`, () => {
    expect(abbrevName(givenName)).toBe(initialsName)
})

