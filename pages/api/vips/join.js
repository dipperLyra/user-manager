import { VIPNetwork } from "../model/vip-model";

const url = require('url');

/*
// Handle requests from users that want to join OnDeck network
// Change the database field for active to true
*/
export default async function handler(req, res) {
    const url_ = process.env.NEXT_PUBLIC_SERVER_URL + process.env.NEXT_PUBLIC_SERVER_PORT;
    var fullUrl = url_ + req.url;
    const u = url.parse(fullUrl, true);

    await VIPNetwork.update({ active: true }, {
        where: {
            verification_code: u.query.token
        }
      });
    res.redirect(url_);
}