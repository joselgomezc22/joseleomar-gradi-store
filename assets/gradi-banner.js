async function gradiBannerInit(){
    const orderSpan     = document.getElementById('gradiBanner-ordersCount')
    const customersSpan = document.getElementById('gradiBanner-customerssCount')
    const ngNorkid = '';
    ordersCount = httpGet(''); 
    ordersCount = ordersCount.data;

    customersCount = httpGet('');
    customersCount = customersCount.data;

    orderSpan.innerHTML     = ordersCount;
    customersSpan.innerHTML = customersCount;

}