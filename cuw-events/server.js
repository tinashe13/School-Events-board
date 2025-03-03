import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventsRoutes.js";
import cors from "cors";




const app = express();

app.use(cors());
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful...");
    app.listen(PORT, () => {
      console.log(`Server is now running on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));

app.use("/api/events", eventRoutes);
