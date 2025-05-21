import "dotenv/config";
import express from "express";
import cors from "cors";
import { corsOptions } from "@/cors/corsOptions";
import { registerRoutes } from "@/routes/routes";

export const application = express();

application.use(cors(corsOptions));
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.use((req, res, next) => {
    console.log(`Express Server >>>> Protocol: ${req.httpVersion}`); // Will show "1.1" or "2.0"
    next();
});

registerRoutes(application);
