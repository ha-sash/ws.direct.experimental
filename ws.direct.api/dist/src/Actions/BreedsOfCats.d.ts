import { WSResponse } from "ws.direct";
export interface BreedsOfCatsSchema {
    img: string;
    name: string;
}
export interface BreedsOfCatsReadParams {
    sort?: {
        field: string;
        direction: "asc" | "desc";
    };
    limit?: number;
    offset?: number;
}
export declare class BreedsOfCats {
    read(params: BreedsOfCatsReadParams, result?: WSResponse): any;
    private sortData(params, data);
    private applyLimitOffset(params, data);
}
