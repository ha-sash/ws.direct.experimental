"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_direct_1 = require("ws.direct");
const BreedsOfCats_1 = require("./src/Actions/BreedsOfCats");
const server = new ws_direct_1.APIServer("http://localhost:3500/");
server.add('BreedsOfCats', new BreedsOfCats_1.BreedsOfCats());
server.run();
