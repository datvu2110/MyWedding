$(window).on("load", function(){
     //home section slideshow
     let slideIndex = $('.slide.active').index()
     let slideLen = $('.slide').length
     function slideShow(){
          //console.log(slideIndex)
          $('.slide').removeClass('active').eq(slideIndex).addClass('active')
          if (slideIndex === slideLen-1){
               slideIndex = 0
          }
          else {
               slideIndex++
          }
          setTimeout(slideShow, 5000)
     }
     slideShow()
})

$(document).ready(function () {

     $(".gallery").magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery:{
              enabled:true
          }
      })
});

$(window).on('load', function() { 
     $('.preloader').fadeOut(); 
     $('#preloader').delay(550).fadeOut('slow'); 
     $('body').delay(650).css({'overflow':'visible'});
});

$(document).ready(function(){
     $(window).scroll (function(){
          if ($(this).scrollTop() > 30){
               $(".header").addClass("fixed")
          }
          else{
               $(".header").removeClass("fixed")
          }
     })


     
     $.scrollIt({
          topOffset:-90
     });
      
})


const hamburger = document.querySelector('.hamburger-btn')
const nav = document.querySelector('.nav')
hamburger.addEventListener("click",() => {
     nav.classList.toggle("open")
})