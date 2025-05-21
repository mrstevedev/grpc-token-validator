import { Application, Request, Response } from "express";
import { healthCheckHandler, userServiceHandler } from "@/controllers/controllers";
import { authMiddleware } from "@/middleware/authMiddleware";

export function registerRoutes(app: Application) {
    app.get("/healthcheck", healthCheckHandler);
    app.get("/protected", authMiddleware, async (request: Request, response: Response) => {
        await userServiceHandler(request, response);
    });
}
