this.productSlide = {
    "activeSlide" : 0,
    "nextSlide"   : 1,
    "aheadButton" : document.getElementsByClassName('product-slide__button-front'),
    "backButton"  : document.getElementsByClassName('product-slide__button-back')
 }
function productSlideInit(){
    let activeSlide = document.getElementById('product-slide-'+this.productSlide.activeSlide);
    activeSlide.classList.add('d-block');
    setTimeout(()=>{
        activeSlide.classList.add('slide-active');
    },500);
    slideDisableButtons()
     
}

function changeSlide(action=false){
    let activeSlide = document.getElementById('product-slide-'+this.productSlide.activeSlide);
    if(action){
        this.productSlide.nextSlide = this.productSlide.activeSlide + 1;
        this.productSlide.activeSlide =  this.productSlide.activeSlide + 1 ;
        console.log(this.productSlide.nextSlide);
    }else{
        this.productSlide.nextSlide = this.productSlide.activeSlide - 1;
        this.productSlide.activeSlide = this.productSlide.activeSlide - 1;
        console.log(this.productSlide.nextSlide); 
    }
    activeSlide.classList.remove('d-block');
    activeSlide.classList.remove('slide-active');

    let nextActive = document.getElementById('product-slide-'+this.productSlide.nextSlide);
    nextActive.classList.add('d-block');
    setTimeout(()=>{
        nextActive.classList.add('slide-active');
    },500);
    slideDisableButtons();

}
function slideDisableButtons(){
    let aheadButton = document.getElementById('slideAheadButton');
    let backButton  = document.getElementById('slideBackButton');
    let activeElement = this.productSlide.activeSlide;
     
    backButton.disabled = false
    aheadButton.disabled = false
     

    switch(activeElement){
        case 0:
            backButton.disabled = true
        break;
        case 2:
            aheadButton.disabled = true
        break;
    }
}
productSlideInit();