/*window.addEventListener('scroll', function(){
        let scroll =document.querySelector('.scrollTop')
            scroll.classList.toggle('active',window.scrollY > 0)
    })
    function backTop(){
        window.scrollTo({
            top: 0, 
            behavior:"smooth" 
        })
}*/

function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:"smooth"});
}

document.querySelector(".scrollTop").addEventListener('click', function(event){
  
    event.preventDefault();
    scrollTo("header")
});

document.querySelector(".scrollDenunciar").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#denuncie")
});