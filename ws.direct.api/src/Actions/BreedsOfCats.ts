import * as fs from "fs";
import { apiMethod, WSResponse} from "ws.direct";

export interface BreedsOfCatsSchema {
    img: string;
    name: string;
}

export interface BreedsOfCatsReadParams {
    sort?: {
        field: string,
        direction: "asc" | "desc"
    };
    limit?: number;
    offset?: number;
}

export class BreedsOfCats {

    @apiMethod public read(params: BreedsOfCatsReadParams, result?: WSResponse): any {
        if (result) {
            fs.readFile("./data/BreedsOfCats.json", {encoding: "utf8"}, (err: Error, jsonText: string) => {
                if (err) {
                    throw err;
                } else {
                    let data: BreedsOfCatsSchema[] = (JSON.parse(jsonText) as BreedsOfCatsSchema[]);
                    this.sortData(params, data);
                    data = this.applyLimitOffset(params, data);
                    result.setData(data).send();
                }
            });
        }
    }

    private sortData(params: BreedsOfCatsReadParams, data: BreedsOfCatsSchema[]): void {
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

    private applyLimitOffset(params: BreedsOfCatsReadParams, data: BreedsOfCatsSchema[]): BreedsOfCatsSchema[] {
        if (params.offset) {
            const offset = params.offset || 0;
            return data.splice(offset, params.limit || offset);
        } else {
            return data;
        }
    }
}


