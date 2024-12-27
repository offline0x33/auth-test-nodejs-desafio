import express from "express";
import sequelize from "./src/db";
import expressIP from "express-ip";
import dotenv from "dotenv";
import { Private, Public } from "./src/routes";

const app = express();

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressIP().getIpInfoMiddleware);

app.use(Public);
app.use(Private);

app.set("PORT", 8089);
app.listen(app.get("PORT"));
