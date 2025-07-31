import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

if (process.env.NODE_ENV === "production") job.start();

// middleware
app.use(express.json());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/transactions");

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
