import { Circle } from "./class/Circle.js"; 
import { Square } from "./class/Square.js";
import { Line } from "./class/Line.js";
import { Rectangle } from "./class/Rectangle.js";

const canvas = document.querySelector('canvas') 
const ctx = canvas.getContext('2d') 
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_Width_input = document.querySelector('input[type=number]')
const color_input = document.querySelector("color") 


const updateUI = (label3,label4) => {
    document.querySelector('div#third label').innerHTML = label3


    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth label').style.display = "inline-block"
      }  else {
            document.querySelector('div#fourth label').style.display = "none"
            document.querySelector('div#fourth label').style.display = "none"
        }
    }

radio_form.addEventListener('click',() => {
const shape = radio_form['shape'].value

    switch (shape) {
        case 'line':
            updateUI('x2','y2')
            break
        case 'circle':
            updateUI('radius','y2')
            break
        case 'rectangle':
            updateUI('width', 'height')
            break
        case 'square':
            updateUI('width','y2')
            break
    }
})


draw_button.addEventListener('click',() => {
    const shape = radio_form['shape'].value
    
        switch (shape) {
            case 'line':
            drawLine()
                break
            case 'circle':
            drawCircle()
                break
            case 'rectangle':
            drawRectangle()
                break
            case 'square':
            drawSquare()
                break
        }
    })
    
    const drawCircle = () => {
        const x = x_input.value
        const y = y_input.value
        const line_Width = line_Width_input.value
        const width = document.querySelector('div#third input').value
        const color = document.querySelector("input[type=color]").value
        const circle = new Circle(x,y,width/2)
        circle.setlineWidth = line_Width
        circle.setColor = color 
        circle.draw(ctx)
    }

    const drawLine = () => {
        const startX = x_input.value
        const startY = y_input.value
        const endX =  document.querySelector("div#third input").value
        const endY =  document.querySelector("div#fourth input").value
        const lineWidth = line_Width_input.value
        const color = document.querySelector("input[type=color]").value
        const line = new Line(startX, startY, endX, endY)  
        line.setLineWidth = lineWidth
        line.setColor = color
        line.draw(ctx)
    }

    const drawRectangle = () => {
        const startX = x_input.value
        const startY = y_input.value
        const width = document.querySelector("div#third input").value
        const height = document.querySelector("div#fourth input").value
        const lineWidth = line_Width_input.value
        const color = document.querySelector("input[type=color]").value
        const rectangle = new Rectangle(startX, startY, width, height)
        rectangle.setLineWidth =lineWidth
        rectangle.setColor = color
        rectangle.draw(ctx)
    }

    const drawSquare = () => {
        const startX = x_input.value
        const startY = y_input.value
        const sideLength = document.querySelector("div#third input").value
        const lineWidth = line_Width_input.value
        const color = document.querySelector("input[type=color]").value
        const square = new Square(startX, startY, sideLength)
        square.setLineWidth =lineWidth
        square.setColor = color
        square.draw(ctx)
    }