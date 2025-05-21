#!/bin/bash

# Create the necessary directories
mkdir -p ./auth-service/generated/protos
mkdir -p ./api-gateway/generated/protos

# Generate for auth-service
protoc -I=./protos ./protos/auth.proto \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_out=grpc_js,outputServices=grpc-js,esModuleInterop=true:./auth-service/generated/protos

# Generate for api-gateway
protoc -I=./protos ./protos/auth.proto \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_out=grpc_js,outputServices=grpc-js,esModuleInterop=true:./api-gateway/generated/protos
