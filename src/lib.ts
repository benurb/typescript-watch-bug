import { PointDocument } from "./interfaces/PointDocument";

export function getPoint(): PointDocument {
    return {
        _id: "1234",
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    }
};