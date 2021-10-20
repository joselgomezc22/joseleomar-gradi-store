export const domElements  = ()=>{
     const dom = {
        "$wCartItems" : document.getElementById('wsideCartItems'),
        "$wCartOverlay" : document.getElementById('wsideCartOverlay'),
        "$wCartCloseButton" : document.getElementById('wsideCartCloseButton'),
        "$wCartOpenButton" : document.querySelector('#wcartIconBubble')
    }
    return dom;
}