let mouseState = 0;


/* These are variables and constants declared for the sake of determining the pixels' size. */
/* --------------------------------------------------------------------------- */
const canvasContainerElem = document.querySelector('.js-canvas-container');
const canvasWidth = canvasContainerElem.clientWidth;
const canvasHeight = canvasContainerElem.clientHeight;

let gridSize = 100;
let pixelWidth = (canvasWidth / gridSize);
let pixelHeight = (canvasHeight / gridSize);
/* --------------------------------------------------------------------------- */


/* Create the initial canvas. The canvas size is determined by the grid dimensions. */
/* ----------------------------------------------------------------------------------------- */
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
/* ----------------------------------------------------------------------------------------- */


/* These event listeners detect if the mouse is being clicked or released. */
/* --------------------------------------------------------- */
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
/* --------------------------------------------------------- */

function turnEraserOn()
{
    eraserToggled = true;
    eraserButtonElem.innerText = `Eraser: On`;
}

function turnEraserOff()
{
    eraserToggled = false;
    eraserButtonElem.innerText = `Eraser: Off`;
}

/* Code responsible for erasing any drawing on the canvas. */
/* -------------------------------------------------------------------------------- */
let eraserToggled = false;
const eraserButtonElem = document.querySelector('.js-eraser');
eraserButtonElem.addEventListener('click', () => {
    if (eraserToggled === false)
    {
        turnEraserOn();
    }
    else if (eraserToggled === true)
    {
        turnEraserOff();
    }
})
/* -------------------------------------------------------------------------------- */


/* Code below is responsible for setting event listeners to each pixel when clicked. */
/* ------------------------------------------------------------------- */
const colorPickerElem = document.querySelector('.js-color-picker');
colorPickerElem.addEventListener('click', () => {
    turnEraserOff();
})

const allPixels = document.querySelectorAll('.js-pixel');

for (let i = 0; i < allPixels.length; i++)
{
    const pixel = allPixels[i];
    pixel.addEventListener('mouseover', () => {
        if (mouseState === 1)
        {
            if (eraserToggled)
            {
                pixel.setAttribute('style', `background-color: white;
                width: ${pixelWidth}px;
                height: ${pixelHeight}px;`);
            }
            else
            {
                pixel.setAttribute('style', `background-color: ${colorPickerElem.value};
                width: ${pixelWidth}px;
                height: ${pixelHeight}px;`);
            }
        }
    })
}
/* ------------------------------------------------------------------- */