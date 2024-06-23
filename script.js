const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEL = document.getElementById('color');
const clearEL = document.getElementById('clear');

const ctx = canvas.getContext('2D');

let size = 10
let isPressed = false //to knooow if mooouse is being pressed
let color ='black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true


    //get position of where the mouse is
    x = e.offsetX
    y = e.offsetY

    //console.log(isPressed, x, y)
})

//when moouse is released
canvas.addEventListener('mouseup', (e) => {
    isPressed = false


    //get position of where the mouse is
    x = undefined
    y = undefined

    //console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})
//search google: drawing shapes with canvas
function drawCircle(x,y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2) // Outer circle
    ctx.fillStyle = color
    ctx.fill()
}

//x1, y1 move to.. x2, y2 draws the line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1) //moves to spec position
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke() //to draw the line
}
// drawCircle(100, 200)
// drawLine(300, 300, 300, 500)

function updateSizeOnScreen() {
    sizeEL.innerText = size
}
//increase/decrease the size element
increaseBtn.addEventListener('click', () =>{
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () =>{
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEL.addEventListener('change', (e) => color = e.target.value)

clearEL.addEventListener('click', (e)=> ctx.clearRect(0, 0, canvas.width, canvas.height))

