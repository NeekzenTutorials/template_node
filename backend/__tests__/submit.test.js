const request = require("supertest");
const { app, server } = require("../index.js");

    afterAll((done) => {
        server.close(done);
    });

describe("POST /submit", () => {
    it("should respond with a success message", async () => {
        const response = await request(app)
            .post("/submit")
            .send({ name: "Test Name", email: "test@example.com" });

                        expect(response.status).toBe(200);
                        expect(response.text).toBe("Form submitted successfully!");
    });
});
