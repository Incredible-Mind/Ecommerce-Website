
const triggers = document.querySelectorAll('.menu-trigger');

console.log(triggers);

for (let i = 0; i < triggers.length; i++){
  triggers[i].addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('is-open'); 
  });
}



$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.dots'
  });
});
$(document).ready(function(){
  $('.slider2').slick({
    slidesToShow:3,
    slidesToScroll:2,
     arrows:false,
     dots:true,
    centerMode:true,
    autoPlay:true,
    appendDots:'.dota'
  });
});