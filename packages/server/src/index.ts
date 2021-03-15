import { APP_TITLE } from "@flipcards/common";
import cors from "cors";
import express from "express";
import { join } from "path";

const PORT = Number.parseInt(process.env.PORT) || 3000;

const app = express();
app.use(cors());

// Serve static resources from the "public" folder
app.use(express.static(join(__dirname, "../../app/public")));

// Serve the frontend client
app.get("*", (req: any, res: any) => {
  res.sendFile(join(__dirname, "../../app/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`${APP_TITLE}'s server listening at http://localhost:${PORT}`);
});
