const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    console.log(x, y);
}

function onMouseDown(e) {
    painting = true;
}

function onMouseUp(e) {
    painting = false;
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', stopPainting);
}