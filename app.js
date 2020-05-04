const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const modeBtn = document.getElementById('jsMode');

canvas.width = 600;
canvas.height=500;
ctx.lineWidth = 2.5;
ctx.strokeStyle = "#2c2c2c";

let painting = false;
let filling = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    } 
}

function handleColorClick(e) {
    const colorPicked = e.target.style.backgroundColor
    ctx.strokeStyle = colorPicked;
}

function handleInputRange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
}

function handleModeBtnClick() {
    if (filling) {
        filling = false;
        modeBtn.innerText = 'Fill';
    } else {
        filling = true;
        modeBtn.innerText = 'Paint';
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))

if (range) {
    range.addEventListener('input', handleInputRange);
}

if (modeBtn) {
    modeBtn.addEventListener('click', handleModeBtnClick);
}
