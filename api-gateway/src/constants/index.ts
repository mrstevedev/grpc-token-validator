export const ORIGIN = process.env.ORIGIN;
export const EXPIRE_IN_SECONDS = 60 * 10;

export const PORT = process.env.PORT || 8000;
export const authServiceUrl = process.env.AUTH_SERVICE_URL as string;
export const NO_RESPONSE_FROM_GRPC_SERVER = "No response from gRPC server";
export const INVALID_TOKEN = "Invalid token";
export const UNAUTHORIZED = "Unauthorized";
export const TOKEN_REQUIRED = "Authorization token is required";
export const TOKEN_VALIDATION_FAILED = "Token validation failed";
