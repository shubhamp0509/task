import express from "express";
import mongoose from "mongoose";
import { fetchUsers } from "./userService";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/userdb")
  .then(() => {
    console.log("Connected to MongoDB");
    // fetchUsers();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
