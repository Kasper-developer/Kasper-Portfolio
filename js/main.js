AOS.init()

AOS.init({
  // Global settings:
  offset: 90,
})

const swiper = new Swiper('.swiper-container', {
  speed: 600,
  spaceBetween: 100,
  loop: true,
  effect: 'coverflow',
  pagination: {
    el: '.projects-pagination',
    type: 'bullets',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true,
  },
})
