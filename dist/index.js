"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Express library and its types
const express_1 = __importDefault(require("express"));
// Initialize an Express application
const app = (0, express_1.default)();
/**
 * Define a GET route.
 *
 * @param path - The route path ('/')
 * @param handler - A callback function that handles the request and response.
 *   - req: represents the incoming request.
 *   - res: represents the outgoing response.
 */
app.get("/", (req, res) => {
    res.status(200).send("ok");
});
// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
