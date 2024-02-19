let mouseState = -1;

const canvasContainerElem = document.querySelector('.js-canvas-container');
const canvasWidth = canvasContainerElem.clientWidth;
const canvasHeight = canvasContainerElem.clientHeight;

let gridSize = 100;
let pixelWidth = (canvasWidth / gridSize);
let pixelHeight = (canvasHeight / gridSize);

for (let i = 0; i < gridSize; i++)
{
    const canvasRow = document.createElement('div');
    canvasRow.classList.add('js-canvas-row', 'canvas-row');
    canvasRow.setAttribute('style', `width: ${canvasWidth}px;`);
    canvasContainerElem.appendChild(canvasRow);

    for (let j = 0; j < gridSize; j++)
    {
        const pixel = document.createElement('div');
        pixel.classList.add('js-pixel', 'pixel');
        pixel.setAttribute('style', `width: ${pixelWidth}px; height: ${pixelHeight}px;`);
        canvasRow.appendChild(pixel);
    }
}

document.body.addEventListener('mousedown', (event) => {
    if (event.button === 0)
    {
        mouseState = 1;
        event.preventDefault();
    }
})

document.body.addEventListener('mouseup', () => {
    mouseState = 0;
})

const allPixels = document.querySelectorAll('.js-pixel');
for (let i = 0; i < allPixels.length; i++)
{
    const pixel = allPixels[i];
    pixel.addEventListener('mouseover', (event) => {
        if (mouseState === 1)
        {
            pixel.setAttribute('style', `background-color: black;
            width: ${pixelWidth}px;
            height: ${pixelHeight}px;`);
        }
    })
}