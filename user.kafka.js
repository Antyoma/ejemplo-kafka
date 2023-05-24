const { findSchemaBySubjectAndVersion, sendMessageToTopic } = require('./kafka');

const topic = 'info-users';
const sersion = 1;
const subject = 'info-users-value';

const writeUserDataTokafka = async (data) => {
    try {
        const encodedPayloadId = await findSchemaBySubjectAndVersion({ version, subject })

        console.log(`Topic: ${topic}; subject: ${subject}; id: ${encodedPayloadId}`)

        await sendMessageToTopic({ payload, topic, encodePayloadId })

    }catch (err){
        console.error(err)
    }    
}

module.exports.writeUserDataTokafka = writeUserDataTokafka