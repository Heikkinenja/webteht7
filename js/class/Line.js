import { Shape } from "./shape.js"

export class Line extends Shape {
#endX
#endY

constructor(startX, startY,endX,endY){
    super(startX,startY)
    this.#endX = endX
    this.#endY = endY
}
set setColor(Color) { 
    this._Color = Color
}
draw (ctx){
ctx.beginPath()
ctx.moveTo(this._x, this._y)
ctx.lineTo(this.#endX, this.#endY)
ctx.strokeStyle = this._color
ctx.lineWidth = this._lineWidth
ctx.stroke()
    }
}