import express from "express";
import path from "node:path";
import CustomRouter from "./routes/router.js";
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", CustomRouter);
  
// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
console.log(`My first Express app - listening on port ${PORT}!`);
});