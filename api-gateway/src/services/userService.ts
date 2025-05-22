import { authServiceUrl, NO_RESPONSE_FROM_GRPC_SERVER, TOKEN_REQUIRED } from "@/constants";
import { credentials, makeGenericClientConstructor, ServiceError } from "@grpc/grpc-js";

// Import gRPC and protobuf definitions:

// AuthServiceService is the service definition generated from your .proto file.
// ValidateTokenRequest and ValidateTokenResponse are the request/response types.

import { AuthServiceService, ValidateTokenRequest, ValidateTokenResponse } from "@protos/auth";

// This is the actual class constructor

// Create a gRPC client constructor
// This dynamically creates a client class that understands how to talk to the AuthService. package_name.service_name
const AuthServiceClient = makeGenericClientConstructor(AuthServiceService, "auth.AuthService");

// Intstantiate the client
// credentials.createInsecure() is used for local development (no TLS).
const authServiceClient = new AuthServiceClient(authServiceUrl, credentials.createInsecure());

// ✅ Purpose
// It defines a validateToken function that your API Gateway (Express app)
// can call to remotely invoke the ValidateToken method on the auth-service's gRPC server.

// Define the token validation function
// 1. It first checks if the token is provided.
// 2. Then wraps the gRPC call in a Promise.
export function validateToken(token: string): Promise<ValidateTokenResponse> {
    if (!token) return Promise.reject(new Error(TOKEN_REQUIRED));

    return new Promise((resolve, reject) => {
        const request: ValidateTokenRequest = { token };

        // Call the gRPC method validateToken on the client
        // This sends the request to the auth-service over gRPC.
        // The auth-service's ValidateToken method processes it and sends back a response.

        // The serialization and deserialization of messages is handled automatically by the
        // gRPC library using the generated code from ts-proto (or whatever codegen tool you used).
        // You don’t see encode() or decode() here because:
        // 🧠 The gRPC client wraps all that under the hood.

        // The gRPC library uses the generated code (from .proto) to:
        // Serialize the request.
        // Then sends the resulting binary over HTTP/2.
        authServiceClient.validateToken(request, (error: ServiceError | null, response: ValidateTokenResponse) => {
            if (error) return reject(error);
            if (!response) return reject(new Error(NO_RESPONSE_FROM_GRPC_SERVER));
            resolve(response);
        });
    });
}

// 🧠 Summary
// This file provides a client utility that allows other parts of the API Gateway to verify tokens by delegating the logic to the auth-service.
//It's a classic microservice communication pattern using gRPC as the transport layer, with protocol buffers as the interface definition.
