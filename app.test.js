
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./server.js";
describe("CloudPilot API", () => {
  it("should return the welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Welcome to CloudPilot!");
  });

  it("should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body.timestamp).toBeDefined();
  });
});
