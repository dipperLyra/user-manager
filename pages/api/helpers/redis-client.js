var redis = require('redis');

// Publish messages to a channel
export async function publisher(vipObject, channel) {
    var publish = redis.createClient();
    await publish.connect();
    await publish.publish(channel, JSON.stringify(vipObject));
}
