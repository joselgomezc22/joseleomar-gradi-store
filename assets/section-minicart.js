// Get Cart
async function minicart_init(){

        let prods = httpGet('/cart.js');
         minicart_RenderCart(prods);
         await openSideCart();

}
function openSideCart(){
    let minicart = document.getElementById('minicart');
    minicart.classList.add('active');
} 
function closeSideCart(){
    let minicart = document.getElementById('minicart');
    minicart.classList.remove('active');
} 

function httpGet(theUrl)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    json = JSON.parse(xmlHttp.responseText)
    return json;
}
function minicart_alterQuant(variantId=0,currentQuant=0,action=false){

    let quantLoader = document.getElementById('minicart_productQuantLoading_'+variantId);
    let quantNumber = document.getElementById('minicart_productQuantNumber_'+variantId);
    quantLoader.classList.remove('hidden');
    quantNumber.classList.add('hidden');
    if (action){
        currentQuant ++ 
    }else{
        currentQuant -- 
    }

    let formData = new FormData;
    formData.append("id",variantId);
    formData.append("quantity",currentQuant);
    fetch('/cart/change.js', {
        method: 'POST',
        body: formData
    }) 
    .then(response => {
        minicart_init();
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
function minicart_deleteVariant(variantId=0){
    let quantLoader = document.getElementById('minicart_productQuantLoading_'+variantId);
    let quantNumber = document.getElementById('minicart_productQuantNumber_'+variantId);
    quantLoader.classList.remove('hidden');
    quantNumber.classList.add('hidden');
    let formData = new FormData;
    formData.append("id",variantId);
    formData.append("quantity",0);
    fetch('/cart/change.js', {
        method: 'POST',
        body: formData
    }) 
    .then(response => {
        minicart_init();
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function minicart_RenderCart(data){
    let total = document.getElementById('minicart__total_ammount');
    let div = document.getElementById('minicart__main');
    let items = data.items;
    let productsHtml = ``;
    let minicartCurrency = data.currency;
    total.innerHTML = data.total_price+' '+minicartCurrency;

    items.forEach(variant => {
        let html = `
            <div class="minicart__products__detail">
            <div class="minicart__products__firstcolumn">
                <div> 
                    <span class="minicart__products__title">${variant.product_title}</span>
                </div>
                <div class="minicart__products__image"> 
                    <img  src="${variant.featured_image.url}"/>
                </div>
            </div>
            <div class="minicart__products__detail__quantity">
                <button class="minicart__products__detail__quantity__button" onclick="minicart_alterQuant(${variant.id},${variant.quantity},true)">
                +
                </button>
                <div id="minicart_productQuantLoading_${variant.id}" class="loading-ov erlay hidden">
                    <div class="loading-overlay__spinner">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                        </svg>
                    </div>
                </div>
                <div id="minicart_productQuantNumber_${variant.id}">
                    <span id="">${variant.quantity}</span> 
                </div>
                <button class="minicart__products__detail__quantity__button" onclick="minicart_alterQuant(${variant.id},${variant.quantity},)">
                -
                </button>
            </div>
            <div class="minicart__products__detail__price">
                <div class="minicart__products__detail__price_prices">
                    <span class="minicart__products__detail__price_unit">Unit Price: ${variant.final_price} <span class="minicart__currencyCode">${minicartCurrency}</span> </span>
                    <br>                 
                    <span class="minicart__products__detail__price_total">${variant.original_line_price} <span class="minicart__currencyCode">${minicartCurrency}</span> </span>
                </div>
                <div>
                    <cart-remove-button>
                        <button onclick="minicart_deleteVariant(${variant.id})" class="button button--tertiary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </cart-remove-button>
                </div>
            </div>
            </div>
            <br>
        `;
        productsHtml += html;
    });
    div.innerHTML = productsHtml;
}

//minicart_init();


