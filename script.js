let mouseState = 0;

/* Responsible for creating the canvas. */
/* ----------------------------------------------------------------------------------------- */
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
console.log(allPixels);

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
/* ------------------------------------------------------------------- */


// const testElem = document.querySelector('.test');
// testElem.addEventListener('click', () => {
//     document.querySelector('.js-canvas-container').innerHTML = '';

//     let mouseState = 0;

//     /* Responsible for creating the canvas. */
//     /* ----------------------------------------------------------------------------------------- */
//     const canvasContainerElem = document.querySelector('.js-canvas-container');
//     const canvasWidth = canvasContainerElem.clientWidth;
//     const canvasHeight = canvasContainerElem.clientHeight;
    
//     let gridSize = 16;
//     let pixelWidth = (canvasWidth / gridSize);
//     let pixelHeight = (canvasHeight / gridSize);
    
//     for (let i = 0; i < gridSize; i++)
//     {
//         const canvasRow = document.createElement('div');
//         canvasRow.classList.add('js-canvas-row', 'canvas-row');
//         canvasRow.setAttribute('style', `width: ${canvasWidth}px;`);
//         canvasContainerElem.appendChild(canvasRow);
    
//         for (let j = 0; j < gridSize; j++)
//         {
//             const pixel = document.createElement('div');
//             pixel.classList.add('js-pixel', 'pixel');
//             pixel.setAttribute('style', `width: ${pixelWidth}px; height: ${pixelHeight}px;`);
//             canvasRow.appendChild(pixel);
//         }
//     }
//     /* ----------------------------------------------------------------------------------------- */
    
    
//     /* Code responsible for detecting if the mouse is being clicked. */
//     /* ------------------------------------------------------------ */
//     canvasContainerElem.addEventListener('mousedown', (event) => {
//         if (event.button === 0)
//         {
//             mouseState = 1;
//             event.preventDefault();
//         }
//     })
    
//     canvasContainerElem.addEventListener('mouseup', () => {
//         mouseState = 0;
//     })
//     /* ------------------------------------------------------------ */
    
    
//     /* Functions used for eraser functionality. */
//     /* ------------------------------------------------------------ */
//     function turnEraserOn()
//     {
//         eraserToggled = true;
//         eraserButtonElem.innerText = `Eraser: On`;
//     }
    
//     function turnEraserOff()
//     {
//         eraserToggled = false;
//         eraserButtonElem.innerText = `Eraser: Off`;
//     }
//     /* ------------------------------------------------------------ */
    
    
//     /* Code responsible for erasing any drawing on the canvas. */
//     /* ------------------------------------------------------------------- */
//     let eraserToggled = false;
//     const eraserButtonElem = document.querySelector('.js-eraser');
//     eraserButtonElem.addEventListener('click', () => {
//         if (eraserToggled === false)
//         {
//             turnEraserOn();
//         }
//         else if (eraserToggled === true)
//         {
//             turnEraserOff();
//         }
//     })
//     /* ------------------------------------------------------------------- */
    
    
//     /* Code below is responsible for setting event listeners to each pixel when clicked. */
//     /* ------------------------------------------------------------------- */
//     const colorPickerElem = document.querySelector('.js-color-picker');
//     colorPickerElem.addEventListener('click', () => {
//         turnEraserOff();
//     })
    
//     const allPixels = document.querySelectorAll('.js-pixel');
//     console.log(allPixels);
    
//     for (let i = 0; i < allPixels.length; i++)
//     {
//         // This code is for allowing the mouse to draw while clicking and dragging.
//         const pixel = allPixels[i];
//         pixel.addEventListener('mouseover', () => {
//             if (mouseState === 1)
//             {
//                 if (eraserToggled)
//                 {
//                     pixel.setAttribute('style', `background-color: white;
//                     width: ${pixelWidth}px;
//                     height: ${pixelHeight}px;`);
//                 }
//                 else
//                 {
//                     pixel.setAttribute('style', `background-color: ${colorPickerElem.value};
//                     width: ${pixelWidth}px;
//                     height: ${pixelHeight}px;`);
//                 }
//             }
//         })
    
//         // This code is for allowing the mouse to draw when only clicked. (Basically create one pixel dot).
//         pixel.addEventListener('click', () => {
//             if (eraserToggled)
//             {
//                 pixel.setAttribute('style', `background-color: white;
//                 width: ${pixelWidth}px;
//                 height: ${pixelHeight}px;`);
//             }
//             else
//             {
//                 pixel.setAttribute('style', `background-color: ${colorPickerElem.value};
//                 width: ${pixelWidth}px;
//                 height: ${pixelHeight}px;`);
//             }
//         })
//     }
// })