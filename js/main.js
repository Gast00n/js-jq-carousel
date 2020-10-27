/**
 * 
 * Costruzione di un Carousel classico
 * 
 */

$(document).ready( function() {
    
    // 1. gestione dei click sulle due frecce
    $('.left').click( function() {
        arrowFunc('prev')
    });

    $('.right').click( function() {
        arrowFunc('next')
    });


    // BONUS - Movimento con le frecce
    $(document).keydown(function(event) {

        if (event.keyCode == 37 ) {
            //Freccia Sinistra - codice 37
            arrowFunc('prev');
        } else if ( event.keyCode == 39 ) {
            //Freccia Destra - codice 39
            arrowFunc('next');
        }
    });

}); //Fine del Ready


//Funzione di Navigazione
function arrowFunc(direction) {

    var imgActive = $('.box img.active');
    var dotActive = $('.dots-menu li.active');

    //Reset Immagini Active Acquisite
    imgActive.removeClass('active');
    dotActive.removeClass('active');

    //LEFT - PREVIOUS
    if( direction === 'prev') {
        if(imgActive.hasClass('first')) {
            $('.box img.last').addClass('active');
            $('.dots-menu li.last').addClass('active');
        } else {
            imgActive.prev('img').addClass('active');
            dotActive.prev('li').addClass('active');
        }
    }


    //RIGHT - NEXT
    if( direction === 'next') {
        if(imgActive.hasClass('last')) {
            $('.box img.first').addClass('active');
            $('.dots-menu li.first').addClass('active');
        } else {
            imgActive.next('img').addClass('active');
            dotActive.next('li').addClass('active');
        }
    }

}