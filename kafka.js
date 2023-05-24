const { kafka } = require('kafkajs');
const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry');

const username = '';
const password = '';
const brokers = ['localhost:9092'];
const host = 'http://localhost:8081';
const clienId = 'client-id-example';
const groupId = 'app-example';

const sasl = username && password ? {username, password, mechanism: 'plain'} : null;
const ssl = !!sasl;

const registry = new SchemaRegistry({ host });
const kafka = new kafka({ clientId, brokers /*ssl sasl */});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId })

const findSchemaBySubjectAndVersion = ({ version, subject }) => registry.getRegistryId(subject, version);

const sendMessageToTopic = async ({ key, topic, encodePayloadId, payload }) => {
  try {

  
 } catch (err) {
 }
}

module.exports.findSchemaBySubjectAndVersion = findSchemaBySubjectAndVersion
module.exports.sendMessageToTopic = sendMessageToTopic