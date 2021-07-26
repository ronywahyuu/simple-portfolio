'use strict'
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.nav-menu').addEventListener('click',function(event){
        event.preventDefault()
        if(event.target.classList.contains('nav-link')){
            const scrollTo = event.target.getAttribute('href');
            document.querySelector(scrollTo).scrollIntoView({
                behavior: "smooth"
            })
        }
    })

    document.querySelector('#btnToTop').addEventListener('click',function(e){
        document.documentElement.scrollIntoView({behavior: 'smooth'})
    })    
  
})
