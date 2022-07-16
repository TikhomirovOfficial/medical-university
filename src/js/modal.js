let search = false;
$('.nav-search-form').hide()

$('.nav-search').click(function () {
    if(search || !search) {search = !search}

    if (search) {
        $(this).attr('src', "./src/img/close_search.svg")
        $('.nav-item-top').css({ "display":"none "})
        $('.nav-search-form').show()
    }
    else {
        $(this).attr('src', "./src/img/search.svg")
        $('.nav-search-form').hide()
        $('.nav-item-top').css({ "display":"block"})


    }
})

//opening modal my cabinet
$('.nav-mycab ').click(function () {
    $('.modal_call').css({"display" : "block"})
    if (!$('#register').hasClass('choose_modal-active')) {
        $('#auth').addClass('choose_modal-active')
    }
})
$('.info-nav-mycab ').click(function () {
    $('.modal_call').css({"display" : "block"})
    if (!$('#register').hasClass('choose_modal-active')) {
        $('#auth').addClass('choose_modal-active')
    }
})

//closing modal my cabinet
$('.close_modal-btn').click(function () {
    $('.modal_call').css({"display": "none" })
})
$('#form-register').hide()

//choose: authorization or registration
$('.choose_modal-item').click( function (){

    switch($(this).attr('id')) {
        case "auth":
            $('#form-register').hide()
            $('#register').removeClass('choose_modal-active')
            $(this).addClass('choose_modal-active')
            $('#form-auth').show()

            break;
        case "register":
            $('#form-auth').hide()
            $('#auth').removeClass('choose_modal-active')
            $(this).addClass('choose_modal-active')
            $('#form-register').show()
            break;

    }
})
$('.info-nav-item').click(function () {

    $('.info-modal-menu').css({
        "visibility":"visible",
        "opacity":"1"
    })

})

$('.close-menu').click(function () {
    $('.info-modal-menu').css({
        "visibility":"hidden",
        "opacity": "0"
    })

})
$('.mobile-nav-item').hover(function (e) {
    $(e.currentTarget).children('.mobile-nav-text')
        .children('span').children('i')
        .addClass('bi-chevron-up')
})
$('.mobile-nav-item').mouseleave(function (e) {
    $(e.currentTarget).children('.mobile-nav-text')
        .children('span').children('i')
        .removeClass('bi-chevron-up')
})

