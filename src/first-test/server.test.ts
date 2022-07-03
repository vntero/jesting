import { send } from 'process'
import supertest from 'supertest'
import server from './server'

describe("POST /users", () => {

    describe("given a username and password", () => {
        // should save the username and password to the db
        // should respond with a json object containing the user id

        test ("should respond with a 200 status code", async () => {
            const response = await request(server).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })
        // should specify the json in the content type header
    })

    describe("when the username and password are missing", () => {
        // respond with a status code of 400
    })
})