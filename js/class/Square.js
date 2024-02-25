import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle {
    constructor(startX, startY, sideLength) {
        super(startX, startY, sideLength, sideLength)
    }
}