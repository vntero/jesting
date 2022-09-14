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

describe('pick', () => {
    it('only returns the requested properties', () => {
        const result = pick({
            email: 'hermann@hesse.com',
            password: 'i-am-in-ticino',
            username: 'steppenwolf',
        }, ['username', 'email'])

        expect(result).toBe({
            email: 'hermann@hesse.com',
            username: 'steppenwolf',
        })
    })
})