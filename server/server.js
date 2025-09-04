import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "dbConnection.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.listen(8080, function () {
  console.log("listening on port 8080");
});
app.get("/", function (request, response) {
  response.json("Welcome, head to /input-data to input your data");
});
app.post("/input-data", function (request, response) {
  body = request.body;
  const input = db.query();
});
