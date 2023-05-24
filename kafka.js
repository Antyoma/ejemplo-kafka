const { Kafka } = require('kafkajs')
const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry')

const username = ''
const password = ''
const brokers = ['localhost:9092']
const host = 'http://localhost:8081'
const clientId = 'client-id-example'
const groupId = 'app-example'

const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl

const registry = new SchemaRegistry({ host })
const kafka = new Kafka({ clientId, brokers /*ssl sasl*/ })

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId })

const findSchemaBySubjectAndVersion = ({ version, subject }) => registry.getRegistryId(subject, version)

const sendMessageToTopic = async ({ key, topic, encodePayloadId, payload }) => {
  try {
   await producer.connect()
   const encodedPayload = await registry.encode(encodePayloadId, payload)

   const responses = await producer.send({
     topic: topic,
     messages: [{ key, value: encodedPayload }]
   })

   console.info('Successful operation when writing data to Kafka', responses)
  } catch (err) {
    console.error('Error trying to write data to Kafka', err)
  }
}

module.exports.findSchemaBySubjectAndVersion = findSchemaBySubjectAndVersion
module.exports.sendMessageToTopic = sendMessageToTopic