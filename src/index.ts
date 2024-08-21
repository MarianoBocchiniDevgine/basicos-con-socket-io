import express from "express";
import http from "http";
import { startServer } from "./server";
import router from "./controllers";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con el origen que necesites
  })
);

app.use(express.urlencoded({ extended: true }));

const httpServer = http.createServer(app);

app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.use(router);

startServer(app, httpServer);
