const abbrevName = require('./abbreviator');

let givenName = 'Cristiano Ronaldo Santos Aveiro'
let initialsName = 'C.R.S.A'

test(`Converts ${givenName} to ${initialsName}`, () => {
    expect(abbrevName(givenName)).toBe(initialsName)
})

