# gRPC - Server-to-Server via gRPC (Node.js)

## 🧠 Summary

> Provides a client utility (validateToken()) from the gRPC client user-service client that allows other parts of the API Gateway
> to verify tokens by delegating the logic to the auth-service. using a microservice communication pattern using gRPC as the
> transport layer, with protocol buffers as the interface definition.

## Notes

gRPC (short for google Remote Procedure Call) is a high-performance, open-source RPC framework that allows different services or
systems to communicate with each other — even if they're written in different languages — over the network using method calls
instead of raw HTTP requests.

🧠 In Simple Terms gRPC lets you write code like this:

```
authService.login({ username: 'jay', password: 'secret' });
```

Instead of:

```
fetch('/login', {
  method: 'POST',
  body: JSON.stringify({ username: 'jay', password: 'secret' })
});
```

## Project Details

1. User Service (gRPC client) (Validate Token)
2. Auth Service (gRPC server) (Responds true/false)
3. chmod +x proto-gen.sh (This makes your proto-gen.sh script executable)
4. chmod - changes file permissions
5. +x - adds execute permission
6. proto-gen.sh - the target shell script file
7. After running chmod +x proto-gen.sh, you can execute the script directly like this:
8. ./proto-gen.sh

🔹 grpc_tools_node_protoc_ts Purpose: A plugin for the protoc compiler that generates TypeScript definitions and service stubs
using the grpc (Node.js) runtime.

🔹 ts-proto 🧠 What it is: ts-proto is a modern TypeScript code generator for Protocol Buffers. It generates idiomatic,
tree-shakable, strongly typed TypeScript that works seamlessly with modern tooling.
