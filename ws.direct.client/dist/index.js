"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_direct_1 = require("ws.direct");
const connect = async function () {
    const client = new ws_direct_1.APIClient("http://localhost:3500");
    try {
        await client.connect();
        const api = client.getActionTyped("BreedsOfCats");
        const z = await api.read({
            sort: {
                field: "Ok",
                direction: "desc"
            },
            limit: 5,
            offset: 10,
        });
        console.log('JOPO');
        console.log('BreedsOfCats', z);
    }
    catch (err) {
        console.log('error', err);
    }
};
connect();
