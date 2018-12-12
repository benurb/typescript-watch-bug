import { PointWrapper } from "./interfaces/PointWrapper";

export function getPoint(): PointWrapper {
    return {
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    }
};