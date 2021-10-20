import { Cart } from './js/cart/index';
import { domElements } from './js/utils/domElements';
import './scss/styles.scss'; 

document.addEventListener('DOMContentLoaded', ()=>{
    const cart = new Cart();
    domElements().$wCartOpenButton.addEventListener('click',cart.openCart)
    domElements().$wCartCloseButton.addEventListener('click',cart.closeCart)
});  