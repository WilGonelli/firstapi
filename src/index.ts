// Import the Express library and its types
import express, { Request, Response } from "express";

// Initialize an Express application
const app = express();

app.use(express.json());

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

interface UserBody {
  userName: string;
  email: string;
}

app.post("/users", (req: Request, res: Response) => {
  const { userName, email }: UserBody = req.body;
  if (!userName || !email) {
    res.status(400).json({ error: "campo userName e email sao obrigatorios" });
    return;
  } else {
    res.status(201).send("ok");
  }
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
