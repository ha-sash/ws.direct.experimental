import { APIServer } from "ws.direct";
import { BreedsOfCats } from "./src/Actions/BreedsOfCats";

const server = new APIServer("http://localhost:3500/");
server.add('BreedsOfCats', new BreedsOfCats());
server.run();

