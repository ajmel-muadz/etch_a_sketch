/* Without this function, the user will be greeted with a blank page without the canvas.
   As such, the function is created so that it is called twice, once for the initial canvas
   and the second whenever the range slider is changed. */
function createCanvas(gridSizeValue)
{
    document.querySelector('.js-canvas-container').innerHTML = '';

    let mouseState = 0;

    /* Responsible for creating the canvas. */
    /* ----------------------------------------------------------------------------------------- */
    const canvasContainerElem = document.querySelector('.js-canvas-container');
    const canvasWidth = canvasContainerElem.clientWidth;
    const canvasHeight = canvasContainerElem.clientHeight;
    
    let gridSize = gridSizeValue;
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
    /* ----------------------------------------------------------------------------------------- */
    
    
    /* Code responsible for detecting if the mouse is being clicked. */
    /* ------------------------------------------------------------ */
    canvasContainerElem.addEventListener('mousedown', (event) => {
        if (event.button === 0)
        {
            mouseState = 1;
            event.preventDefault();
        }
    })
    
    canvasContainerElem.addEventListener('mouseup', () => {
        mouseState = 0;
    })
    /* ------------------------------------------------------------ */
    
    
    /* Functions used for eraser functionality. */
    /* ------------------------------------------------------------ */
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
    /* ------------------------------------------------------------ */
    
    
    /* Code responsible for erasing any drawing on the canvas. */
    /* ------------------------------------------------------------------- */
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
    /* ------------------------------------------------------------------- */
    
    
    /* Code below is responsible for setting event listeners to each pixel when clicked. */
    /* ------------------------------------------------------------------- */
    const colorPickerElem = document.querySelector('.js-color-picker');
    colorPickerElem.addEventListener('click', () => {
        turnEraserOff();
    })
    
    const allPixels = document.querySelectorAll('.js-pixel');
    
    for (let i = 0; i < allPixels.length; i++)
    {
        // This code is for allowing the mouse to draw while clicking and dragging.
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
    
        // This code is for allowing the mouse to draw when only clicked. (Basically create one pixel dot).
        pixel.addEventListener('click', () => {
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
        })
    }
}

// The canvas is initially created with the initial grid size value.
let initialGridSize = 16;
createCanvas(initialGridSize);

// Now whenever the user changes the range slider the canvas will adapt to the value of the slider.
const sliderElem = document.querySelector('.js-slider');
const sliderValueElem = document.querySelector('.js-slider-value');
sliderElem.addEventListener('input', () => {
    createCanvas(sliderElem.value);
    sliderValueElem.innerText = sliderElem.value;
    console.log(sliderElem.value);
})

const resetCanvasElem = document.querySelector('.js-reset-canvas');
resetCanvasElem.addEventListener('click', () => {
    createCanvas(sliderElem.value);
})