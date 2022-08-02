let header = $('#header1');
let introH = $('#intro').innerHeight();
let scrollOffset =  $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on ('scroll', function() {
    scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);

});

function checkScroll(scrollOffset) {

    if(scrollOffset >= introH) {
        header.addClass('fixed');
    }else {
    header.removeClass('fixed')
}
}

// СКРОЛЛ ПРИ НАЖАТИИ К ШАПКЕ

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

         // подсветка ссылок
        $('#nav a'). removeClass('active')
        $this.addClass ('active')


    $('html, body').animate({
        scrollTop: blockOffset - 70
    },500);
});


// Активация бургера с крестиком
$('#nav__toggl').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active')
    $('#nav').toggleClass('active')

});

// убирать бургер при нажатии ссылки
$('#nav').on('click', function(event){
    event.preventDefault();
    $(this).removeClass('active')
    $('#nav__toggl').removeClass('active');
});