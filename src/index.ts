// Import the Express library and its types
import express, { Request, Response } from "express";

// Initialize an Express application
const app = express();

/**
 * Define a GET route.
 *
 * @param path - The route path ('/')
 * @param handler - A callback function that handles the request and response.
 *   - req: represents the incoming request.
 *   - res: represents the outgoing response.
 */
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("ok");
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
