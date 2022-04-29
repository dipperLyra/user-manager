import { VIP, VIPNetwork } from "../model/vip-model";

export default async function handler(req, res) {

    try {
        // map with two keys: active and inActive
        // each key maps to a list of vip objects
        let vips = await sortVIPs(); 

        res.status(200).send(vips);
    } catch(error) {
        console.error('Could not find records ' + error)
    }
}

async function sortVIPs() {
    let map = await findVIP();

    let vipNetworkList = map.vipN;
    let vipList = map.vips;

    let active = [];
    let inActive = [];

    for (let i = 0; i < vipList.length; i++) {
        if (vipList[i].id == vipNetworkList[i].vip_id) {
            if (vipNetworkList[i].active == true) {
                active.push(vipList[i]);
            } else inActive.push(vipList[i])
        } 
    }

    return {active: active, inActive: inActive}   
}

async function findVIP() {
    let vips = await VIP.findAll();
    let vipN= await VIPNetwork.findAll();

    return {vips: vips, vipN: vipN};
}