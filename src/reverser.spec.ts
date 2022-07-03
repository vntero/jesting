const reverseWords = require('./reverser')

let input = 'Zurich'
let reversedInput = 'hciruZ'

test(
    'Is the received string being converted into a reversed gibberish mombo-jombo?', 
    () => {
        expect(reverseWords(input)).toBe(reversedInput)
    }
)