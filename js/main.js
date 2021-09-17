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


$(document).ready(function(){
     $(window).scroll (function(){
          if ($(this).scrollTop() > 100){
               $(".header").addClass("fixed")
          }
          else{
               $(".header").removeClass("fixed")
          }
     })


     
     $.scrollIt({
          topOffset:-80
     });
      
})


const hamburger = document.querySelector('.hamburger-btn')
const nav = document.querySelector('.nav')
hamburger.addEventListener("click",() => {
     nav.classList.toggle("open")
})