// Get Cart

async function init(){

        let prods = httpGet('/cart.js');
        await minicart_RenderCart(prods);

}

function httpGet(theUrl)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    json = JSON.parse(xmlHttp.responseText)
    return json;
}

function minicart_RenderCart(data){
    let div = document.getElementById('minicart__main');
    let items = data.items;
    let productsHtml = ``;

    items.forEach(variant => {
        let html = `
        <div>
            <div>
                <div>
                    ${variant.product_title}
                </div>
                <div>
                    <img style="heigth:30px;width:30px" src="${variant.featured_image.url}"/>
                </div>
            </div>
            <div>
                <button>
                +
                </button>
                <div>
                ${variant.quantity}
                </div>
                <button>
                -
                </button>
            </div>
            <div>
            <span>${variant.final_price}</span>
            </div>
        </div>
        
        
        <br>  
        `;
        productsHtml += html;
    });
    div.innerHTML = productsHtml;
}

init();


