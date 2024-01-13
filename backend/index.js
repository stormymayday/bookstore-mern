import express from "express";
import { PORT } from "./config.js";

// Defining a variable for Express
const app = express();

// Function for listening to a port
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

// Route for "/"
app.get("/", (request, response) => {
    console.log(request);

    return response.status(234).send("Welcome to MERN Stack Tutorial");
});
