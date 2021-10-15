import { domElements } from "../../utils/domElements.js";
import API from "../../api/api.js";
export class Cart {
    addEvents = () =>{
        const $increaseButtonsAsArray  = [...document.querySelectorAll('.js-increase-product-quant')];
        const $decreaseButtonsAsArray  = [...document.querySelectorAll('.js-decrease-product-quant')];
        const $deleteButtonsAsArray  = [...document.querySelectorAll('.js-delete-product-quant')];
        $increaseButtonsAsArray.forEach(element => {
            element.addEventListener('click',this.increaseQuant)
        });
        $decreaseButtonsAsArray.forEach(element => {
            element.addEventListener('click',this.decreaseQuant)
        });
        $deleteButtonsAsArray.forEach(element => {
            element.addEventListener('click',this.deleteProd)
        });

    } 
     increaseQuant = async (event)=>{
         //alert('hey');
         const variantId    = event.target.parentNode.dataset.variantid;
         let variantQuant = event.target.parentNode.dataset.itemquant;
         //console.log(variantId); 
         variantQuant = parseInt(variantQuant);
         await API.updateQuant(variantId, variantQuant + 1);
         await this.update();
    }
    decreaseQuant = async (event)=>{
         //alert('hey');
         const variantId    = event.target.parentNode.dataset.variantid;
         let variantQuant = event.target.parentNode.dataset.itemquant;
         //console.log(variantId); 
         variantQuant = parseInt(variantQuant);
         await API.updateQuant(variantId, variantQuant - 1);
         await this.update();

    }
    deleteProd = async (event)=>{
         //alert('hey');
         const variantId    = event.target.parentNode.dataset.variantid;
         let variantQuant = 0;
         //console.log(variantId); 
         await API.updateQuant(variantId, variantQuant);
         await this.update();

    }
    update = async () =>{
        const section = await API.renderSection('workshop-cart');
        domElements().$wCartItems.innerHTML = section;
        this.addEvents();
    }

    openCart = ()=>{
        domElements().$wCartOverlay.classList.add('active'); 
        this.update();
        this.addEvents();
    }

    closeCart = ()=>{
        domElements().$wCartOverlay.classList.remove('active'); 
    }

}