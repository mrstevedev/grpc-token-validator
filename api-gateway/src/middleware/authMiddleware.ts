import { Request, Response, NextFunction } from "express";
import { AppLogger } from "@/package/logger/AppLogger";
import { validateToken } from "@/services/userService";
import { INVALID_TOKEN, TOKEN_REQUIRED } from "@/constants";

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    AppLogger.info("Auth middleware");
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1] || "";

    if (!token) {
        AppLogger.warn(TOKEN_REQUIRED);
        res.status(401).json({ status: TOKEN_REQUIRED });
        return;
    }

    try {
        const result = await validateToken(token);
        if (!result.isValid) {
            AppLogger.warn(INVALID_TOKEN);
            res.status(401).json({ status: INVALID_TOKEN });
            return;
        }

        // Attach user info to request for downstream handlers if needed
        (req as any).user = { id: result.userId };

        next();
    } catch (err) {
        AppLogger.error("Auth middleware error", err);
        res.status(500).json({ status: "Token validation failed" });
        return;
    }
}
