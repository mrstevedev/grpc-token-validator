import { Request, Response, NextFunction } from "express";
import { AppLogger } from "@/package/logger/AppLogger";
import { validateToken } from "@/services/userService";
import { INVALID_TOKEN, TOKEN_REQUIRED, TOKEN_VALIDATION_FAILED } from "@/constants";
import { RequestWithUser } from "@/controllers/controllers";

export async function authMiddleware(request: Request, response: Response, next: NextFunction): Promise<void> {
    AppLogger.info("Auth middleware");
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(" ")[1] || "";

    if (!token) {
        AppLogger.warn(TOKEN_REQUIRED);
        response.status(401).json({ status: TOKEN_REQUIRED });
        return;
    }

    try {
        const result = await validateToken(token);
        if (!result.isValid) {
            AppLogger.warn(INVALID_TOKEN);
            response.status(401).json({ status: INVALID_TOKEN });
            return;
        }

        // Attach user info to request for downstream handlers if needed
        (request as RequestWithUser).user = { id: result.userId };

        next();
    } catch (err) {
        AppLogger.error("Auth middleware error", err);
        response.status(500).json({ status: TOKEN_VALIDATION_FAILED });
        return;
    }
}
