function headerSticky(){
    window.addEventListener('scroll',e=>{
        const header=document.querySelector('.nav-header')
        const banner=document.querySelector('.slider-banner')
        const space=140 
        if(pageYOffset>space){
            header.classList.add('sticky')
            banner.style.marginTop='116px'
        }else{
            header.classList.remove('sticky')
        }
    })
}
headerSticky()