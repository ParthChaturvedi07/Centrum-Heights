// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import testRoutes from "./routes/testRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/leads", leadRoutes);
app.use("/api/test", testRoutes); 

app.get("/", (req, res) => {
  res.send("Centrum Heights Lead API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
