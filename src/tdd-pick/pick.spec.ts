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
        username: obj.props[0],
        email: obj.props[1],
    }
}

let user = {
    email: 'hermann@hesse.com',
    password: 'i-am-in-ticino',
    username: 'steppenwolf',
}

let props = ['username', 'email']

const result = pick(user, props)

let pickedUser = {
    email: 'hermann@hesse.com',
    username: 'steppenwolf',
}

it('only returns the requested properties', () => {
        expect(result).toBe(pickedUser)
    })
