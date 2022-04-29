import { VIP, VIPNetwork } from "../model/vip-model";
var {publisher} = require('../helpers/redis-client');

/*
This file handles form requests.
Save(request, response) function saves new vip to the database and 
publishes an event to Redis.

If the email service is subscribed (running) it will consume this event and send out an email
*/
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return save(req, res);
    
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

//Using the http request body object this function will attempt to save vip records
//and publish an event to a Redis channel.
async function save(req, res) {
    const {name, email} = req.body;
    const vip = {username: name, email: email};
    let rand = Math.random().toString(36).substring(2); 
    const token = rand + rand;

    let isUserPresent = await vipExists(email);
    
    try {
        if (!isUserPresent) {
            create(vip, token);
            res.status(200).send('successful');
        } 
    } catch (error) {
        console.error('Error ' + error)
        res.status(500).send('Failed');
    }
}

async function create (vip, token) {
    const channel = 'mailer';
    let v = await VIP.create(vip);
    await VIPNetwork.create({ active: false, vip_id: v.id, verification_code: token })
    vip['token'] = token; 
    await publisher(vip, channel);
}

async function vipExists(email) {
    const count = await VIP.count({ where: { email: email } });
    console.log(`Count ${count}`)
    return count > 0 ? true : false;
}
