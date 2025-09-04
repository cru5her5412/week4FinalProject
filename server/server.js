import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./dbConnection.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.listen(8080, function () {
  console.log("listening on port 8080");
});
app.get("/", function (request, response) {
  response.json("Welcome");
});
app.post("/", function (request, response) {
  let body = request.body;
  const input = db.query(
    `INSERT INTO week4FinalProject (name,favNum, favColour, additionalInfo) values ($1, $2, $3,$4)`,
    [
      body.formData.name,
      body.formData.favNum,
      body.formData.favColour,
      body.formData.additionalInfo,
    ]
  );
  response.json("data received");
});
app.get("/get-data-from-db", async function (request, response) {
  let dbContents = await db.query(
    `SELECT name, favNum, favColour, additionalInfo FROM week4FinalProject`
  );
  console.log(dbContents.rows);
  response.json(dbContents.rows);
});
