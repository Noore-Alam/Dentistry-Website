
$(function() {
    $("#team-members").owlCarousel ({
        items: 4,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        margin:20,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 4
            },
            // breakpoint from 480 up
            480: {
                items: 4
            }
        }
    });
});


$(function () {
    $("#testimonial-slider").owlCarousel ({
        items: 1,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']
    })
})



$(function () {
    $("#latest-slider").owlCarousel ({
        items: 3,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']
    })
})

function sum(math,eng,soc) {
    var s = math + eng + soc;
    return s;
  }
  var total = sum(80,80,80);

  function par(tt) {
    var pat = tt/300 * 100;
    document.write(pat);
  }
  
  par(total);