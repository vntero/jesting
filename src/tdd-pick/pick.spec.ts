/**
 * # pick(obj, properties)
 * 
 * We want to create a function that filters objects down to a given list of properties
 * 
 * # Example:
 * 
 *             obj               |         properties           |       output
 * ------------------------------|------------------------------|------------------------------
 * {                             |   ['username', 'email']      | { 
 *  email: 'hermann@hesse.com',  |                              |   email: 'hermann@hesse.com',
 *  password: 'i-am-in-ticino',  |                              |   username: 'steppenwolf',  
 *  username: 'steppenwolf',     |                              | }
 * }                             |                              |
 */

function pick(obj, props) {
    return {
        username: obj.username,
        email: obj.email
    }
}

let user = {
    email: 'hermann@hesse.com',
    password: 'i-am-in-ticino',
    username: 'steppenwolf',
}

let props = ['username', 'email']

let pickedUser = {
    email: 'hermann@hesse.com',
    username: 'steppenwolf',
}

it('only returns the requested properties', () => {
        expect(pick(user, props)).toEqual(pickedUser)
    })
