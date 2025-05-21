# gRPC - Server-to-Server via gRPC (Node.js)

## 🧠 Summary

> Provides a client utility (validateToken()) from the gRPC client user-service client that allows other parts of the API Gateway
> to verify tokens by delegating the logic to the auth-service. using a microservice communication pattern using gRPC as the
> transport layer, with protocol buffers as the interface definition.

## Notes

1. User Service (gRPC client) (Validate Token)
2. Auth Service (gRPC server) (Responds true/false)
3. chmod +x proto-gen.sh (This makes your proto-gen.sh script executable)
4. chmod - changes file permissions
5. +x - adds execute permission
6. proto-gen.sh - the target shell script file
7. After running chmod +x proto-gen.sh, you can execute the script directly like this:
8. ./proto-gen.sh
