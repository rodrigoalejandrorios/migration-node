#Generar la codificación de gRPC

grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./controllers/protos/text \
--grpc_out=grpc_js:./controllers/protos/text \
--proto_path=./controllers/protos ./controllers/protos/text.proto

--plugin=`which grpc_tools_node_protoc_plugin`
