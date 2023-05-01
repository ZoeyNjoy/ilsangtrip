// 시작
      const slide = new Swiper("main .slide", {
        centeredSlides: true,
        loop: true,
        speed : 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });

      const program = new Swiper("main section .program", {
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        },
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true, 
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
	    speed : 300,
        // autoplay: {
        //     delay: 300,
        //     disableOnInteraction: false,
        // },
      });


      const instslide = new Swiper("main section .instslide", {
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        },
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true, 
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        speed : 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
      });
      
      let observer = new IntersectionObserver((e)=>{
        e.forEach((fade)=>{
          if(fade.isIntersecting){
            fade.target.style.opacity=1;
            fade.target.style.animation='fade1 .5s';
          }
          // else{
          //   fade.target.style.opacity=0;
          //   fade.target.style.animation='fade2 .5s';
          // }
        })
      })
      
      let fade = document.querySelectorAll('.fade')
      observer.observe(fade[0])
      observer.observe(fade[1])