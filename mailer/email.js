var redis = require('redis');
const mailjet = require ('node-mailjet');
require('dotenv').config();

const apiKey = process.env.MAILJET_API_KEY;
const apiSecret = process.env.MAILJET_API_SECRET;
const mailFromName = process.env.MAIL_FROM_NAME;
const mailFrom = process.env.MAIL_FROM_ACCOUNT;
const serverUrl = process.env.SERVER_URL;
const serverPort = process.env.SERVER_PORT;
const joinNetworkUrl = process.env.JOIN_NETWORK_URL;


(async () => {
    const client = redis.createClient();
    const subscriber = client.duplicate();
    await subscriber.connect();

    await subscriber.subscribe('mailer', (message) => {
        let jsonMessage = JSON.parse(message);
        
        sendEmail(jsonMessage.email, jsonMessage.name, jsonMessage.token)
            .then(() => console.log('Email sent!'))
            .catch((err) => console.error('Error: ', err));
    });
})();

async function sendEmail(mailTo, name, token) {
    var mj = mailjet.connect(apiKey, apiSecret);

    return mj.post("send", {'version': 'v3.1'})
    .request({
        "Messages":[{
            "From": {
                "Email": mailFrom,
                "Name": mailFromName,
            },
            "To": [
                {
                    "Email": mailTo,
                    "Name": name,
                }
            ],
            "Subject": "Greetings from OnDeck",
            "TextPart": "It was great meeting you 🎊",
            "HTMLPart": '<a href='+serverUrl +serverPort +joinNetworkUrl +token +'>Join OnDeck <strong>VIP network</strong></a>',
        }]
    });
}