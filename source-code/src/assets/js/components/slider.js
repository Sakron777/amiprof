
  let slider2 = $("#Slider");


  slider2.slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      fade: false,
      arrows: true,
      dots:false,
      prevArrow: $('.button-prev'),
      nextArrow: $('.button-next'),
      autoplay: true,
      autoplaySpeed: 5000,

      responsive:[
        {

           breakpoint: 1195,
           settings:{
               slidesToShow: 2
           }
        },

        {

          breakpoint: 528,
          settings:{
              slidesToShow: 1
          }
       }
    ]
    });

    let slider = $("#Slider2");


    slider.slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        fade: false,
        arrows: true,
        dots:false,
        prevArrow: $('.button-prev2'),
        nextArrow: $('.button-next2'),
        autoplay: true,
        autoplaySpeed: 5000,

        responsive:[
          {

             breakpoint: 1195,
             settings:{
                 slidesToShow: 2
             }
          },

          {

            breakpoint: 528,
            settings:{
                slidesToShow: 1
            }
         }
      ]
      });