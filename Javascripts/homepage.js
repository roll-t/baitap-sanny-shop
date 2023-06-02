

const WrapSlide = document.querySelector('.slider-banner');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
var ttl=0;
btnPrev.addEventListener('click',()=>{
    const listBanner = document.querySelectorAll('.main-banner');
    WrapSlide.appendChild(listBanner[0]);
    ttl=0;
})

btnNext.addEventListener('click',()=>{
    const listBanner = document.querySelectorAll('.main-banner');
    WrapSlide.prepend(listBanner[listBanner.length-1]);
    ttl=0;
})

setInterval(()=>{
    ttl++;
    if(ttl>=3){
        btnNext.click();
    }
},1000)