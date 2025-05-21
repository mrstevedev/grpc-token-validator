import * as grpc from "@grpc/grpc-js";
import { AuthServiceService, ValidateTokenRequest, ValidateTokenResponse } from "@protos/auth";
import { Server, ServerUnaryCall, sendUnaryData, ServerCredentials } from "@grpc/grpc-js";

const validateToken: grpc.handleUnaryCall<ValidateTokenRequest, ValidateTokenResponse> = (
    call: ServerUnaryCall<ValidateTokenRequest, ValidateTokenResponse>,
    callback: sendUnaryData<ValidateTokenResponse>
) => {
    const token = call.request.token;

    if (token === "valid-token") {
        callback(null, { isValid: true, userId: "user123" });
    } else {
        callback(null, { isValid: false, userId: "Invalid Token" });
    }
};

function main() {
    const server = new Server();
    server.addService(AuthServiceService, { validateToken });

    const address = "0.0.0.0:50051";
    server.bindAsync(address, ServerCredentials.createInsecure(), (error, port) => {
        if (error) throw error;
        console.log(`✅ gRPC server running on ${address} (uses HTTP/2)`);
    });
}
main();
