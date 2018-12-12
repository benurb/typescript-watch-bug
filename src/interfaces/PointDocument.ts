import { Point } from "./Point";

export interface Document {
    _id: string
}

export interface PointDocument extends Document, Point {

}