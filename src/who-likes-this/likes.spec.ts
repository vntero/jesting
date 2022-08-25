const likes = require('./likes')

let users = ['Rico', 'Ana', 'Alana', 'Hugo']

let threeUsersThatLiked = `${users[0]}, ${users[1]} and ${users[2]} like this`

let fourUsersThatLiked = `${users[0]}, ${users[1]} and ${users.length - 2} others like this`

test('Counts the number of likes and names the first 3', ()=> {
    expect(likes(users)).toBe(fourUsersThatLiked)
})

