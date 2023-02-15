let menuOpen = document.querySelector('.menu-toggle');
let menuWrap = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('bx-x');
    menuWrap.classList.toggle('active');
    

})

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween:30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
      

  });

function cardStory (){
    var cardOpen = document.getElementById('cardPreview');
    if (cardOpen.style.display === "none"){
      cardOpen.style.display = "block";
    } else {
      cardOpen.style.display = "none";
    }
}