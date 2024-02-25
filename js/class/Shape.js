export class Shape {
    _x
    _y
    _lineWidth
    _Color

    constructor (x,y,lineWidth = 1, Color = 'black') { 
        this._x = x 
        this._y = y
        this._lineWidth = lineWidth
        this._Color = Color 
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set setColor(Color) {
        this._Color = Color 
    }
} 