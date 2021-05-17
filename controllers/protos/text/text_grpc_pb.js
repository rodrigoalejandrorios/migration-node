// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var text_pb = require('./text_pb.js');

function serialize_Assistance(arg) {
  if (!(arg instanceof text_pb.Assistance)) {
    throw new Error('Expected argument of type Assistance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Assistance(buffer_arg) {
  return text_pb.Assistance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AssistanceRequestId(arg) {
  if (!(arg instanceof text_pb.AssistanceRequestId)) {
    throw new Error('Expected argument of type AssistanceRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AssistanceRequestId(buffer_arg) {
  return text_pb.AssistanceRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Clause(arg) {
  if (!(arg instanceof text_pb.Clause)) {
    throw new Error('Expected argument of type Clause');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Clause(buffer_arg) {
  return text_pb.Clause.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ClauseRequestId(arg) {
  if (!(arg instanceof text_pb.ClauseRequestId)) {
    throw new Error('Expected argument of type ClauseRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ClauseRequestId(buffer_arg) {
  return text_pb.ClauseRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DynamicText(arg) {
  if (!(arg instanceof text_pb.DynamicText)) {
    throw new Error('Expected argument of type DynamicText');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DynamicText(buffer_arg) {
  return text_pb.DynamicText.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DynamicTextRequestId(arg) {
  if (!(arg instanceof text_pb.DynamicTextRequestId)) {
    throw new Error('Expected argument of type DynamicTextRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DynamicTextRequestId(buffer_arg) {
  return text_pb.DynamicTextRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}


var TextsService = exports.TextsService = {
  getClause: {
    path: '/Texts/GetClause',
    requestStream: false,
    responseStream: false,
    requestType: text_pb.ClauseRequestId,
    responseType: text_pb.Clause,
    requestSerialize: serialize_ClauseRequestId,
    requestDeserialize: deserialize_ClauseRequestId,
    responseSerialize: serialize_Clause,
    responseDeserialize: deserialize_Clause,
  },
  getAssistance: {
    path: '/Texts/GetAssistance',
    requestStream: false,
    responseStream: false,
    requestType: text_pb.AssistanceRequestId,
    responseType: text_pb.Assistance,
    requestSerialize: serialize_AssistanceRequestId,
    requestDeserialize: deserialize_AssistanceRequestId,
    responseSerialize: serialize_Assistance,
    responseDeserialize: deserialize_Assistance,
  },
  getDynamicText: {
    path: '/Texts/GetDynamicText',
    requestStream: false,
    responseStream: false,
    requestType: text_pb.DynamicTextRequestId,
    responseType: text_pb.DynamicText,
    requestSerialize: serialize_DynamicTextRequestId,
    requestDeserialize: deserialize_DynamicTextRequestId,
    responseSerialize: serialize_DynamicText,
    responseDeserialize: deserialize_DynamicText,
  },
};

exports.TextsClient = grpc.makeGenericClientConstructor(TextsService);
