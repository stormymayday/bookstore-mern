import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

// Defining a variable for Express
const app = express();

// Route for "/"
app.get("/", (request, response) => {
    console.log(request);

    return response.status(234).send("Welcome to MERN Stack Tutorial");
});

// Connecting to MongoDB
mongoose
    .connect()
    .then(() => {
        console.log("App connected to database");

        // Function for listening to a port
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
