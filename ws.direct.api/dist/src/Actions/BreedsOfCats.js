"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const ws_direct_1 = require("ws.direct");
class BreedsOfCats {
    read(params, result) {
        if (result) {
            fs.readFile("./data/BreedsOfCats.json", { encoding: "utf8" }, (err, jsonText) => {
                if (err) {
                    throw err;
                }
                else {
                    let data = JSON.parse(jsonText);
                    this.sortData(params, data);
                    data = this.applyLimitOffset(params, data);
                    result.setData(data).send();
                }
            });
        }
    }
    sortData(params, data) {
        if (params.sort) {
            let up = params.sort.direction === "desc" ? -1 : 1, down = up * -1;
            data.sort((a, b) => {
                if (a.name > b.name) {
                    return up;
                }
                if (a.name < b.name) {
                    return down;
                }
                return 0;
            });
        }
    }
    applyLimitOffset(params, data) {
        if (params.offset) {
            const offset = params.offset || 0;
            return data.splice(offset, params.limit || offset);
        }
        else {
            return data;
        }
    }
}
__decorate([
    ws_direct_1.apiMethod
], BreedsOfCats.prototype, "read", null);
exports.BreedsOfCats = BreedsOfCats;
