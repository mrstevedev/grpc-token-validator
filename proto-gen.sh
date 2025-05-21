#!/bin/bash

# Generate for auth-service
protoc -I=./protos ./protos/auth.proto \
  --js_out=import_style=commonjs,binary:./auth-service/generated/protos \
  --grpc_out=grpc_js:./auth-service/generated/protos

# Generate for api-gateway
protoc -I=./protos ./protos/auth.proto \
  --js_out=import_style=commonjs,binary:./api-gateway/generated/protos \
  --grpc_out=grpc_js:./api-gateway/generated/protos