const { findSchemaBySubjectAndVersion, sendMessageToTopic } = require('./kafka');

const topic = 'info-users';
const version = 2;
const subject = 'info-users-value';

const writeUserDataTokafka = async (payload) => {
    try {
        const encodePayloadId = await findSchemaBySubjectAndVersion({ version, subject })

        console.log(`Topic: ${topic}; subject: ${subject}; id: ${encodePayloadId}`)

        await sendMessageToTopic({ payload, topic, encodePayloadId })

    }catch (err){
        console.error(err)
    }    
}

module.exports.writeUserDataTokafka = writeUserDataTokafka