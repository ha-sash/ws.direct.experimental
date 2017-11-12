import { APIClient } from "ws.direct";
import { BreedsOfCats } from "ws.direct.api";

const connect = async function() {
    const client = new APIClient("http://localhost:3500");

    try {
        await client.connect();
        const api = client.getActionTyped<BreedsOfCats>("BreedsOfCats");
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
    } catch (err) {
        console.log('error', err);
    }
}

connect();