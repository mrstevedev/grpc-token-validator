import { Request, Response } from "express";
import { AppLogger } from "@/package/logger/AppLogger";

export function healthCheckHandler(request: Request, response: Response) {
    AppLogger.info("Health Check");
    response.status(200).json({ status: "OK" });
}

export interface RequestWithUser extends Request {
    user?: { id: string };
}

export async function userServiceHandler(request: RequestWithUser, response: Response) {
    AppLogger.info("User Service Handler");

    // Access user info from middleware
    const user = (request as RequestWithUser).user;

    if (!user) {
        AppLogger.warn("User info missing from request");
        return response.status(500).json({ message: "User context not available" });
    }

    AppLogger.info(`Responding to user ${user.id}`);
    response.status(200).json({ message: `Hello user ${user.id}` });
}
