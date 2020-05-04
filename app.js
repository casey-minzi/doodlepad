const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const modeBtn = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');
const resetBtn = document.getElementById('jsReset');

const INITIAL_COLOUR = '#2c2c2c';

canvas.width = 600;
canvas.height=500;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5;
ctx.strokeStyle = INITIAL_COLOUR;
ctx.fillStyle = INITIAL_COLOUR;

let painting = false;
let filling = false;

const startPainting = () => painting = true;

const stopPainting = () => painting = false;

const handleCM = e => e.preventDefault();

const handleResetBtn = ()  => ctx.clearRect(0, 0, canvas.width, canvas.height);

const handleCanvasClick =() => filling && ctx.fillRect(0, 0, canvas.width, canvas.height);

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    painting ?
        (ctx.lineTo(x,y), ctx.stroke()) :
        (ctx.beginPath(), ctx.moveTo(x, y));
}

function handleColorClick(e) {
    const colorPicked = e.target.style.backgroundColor;
    ctx.strokeStyle = colorPicked;
    ctx.fillStyle = colorPicked;
}

function handleInputRange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
}

function handleModeBtnClick() {
    filling ? 
        (filling = false, modeBtn.innerText = 'Fill') :
        (filling = true, modeBtn.innerText = 'Paint');
}

function handleSaveBtn() {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'DoodlePad';
    link.click();
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))

range && range.addEventListener('input', handleInputRange);

modeBtn && modeBtn.addEventListener('click', handleModeBtnClick);

saveBtn && saveBtn.addEventListener('click', handleSaveBtn);

resetBtn && resetBtn.addEventListener('click', handleResetBtn);