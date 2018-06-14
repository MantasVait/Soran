'use strict';
$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // veikia tik kai puslapis yra atidarytas įrenginiuose su mažesniu nei 1000px plocio ekranu
    // (minimalistinė karuselė)
    if ($(window).width() <= 1001) {
        let current_position = 1;

        $('.team .arrow-left').on('click', function() {
            current_position--;
            if (current_position <= 0) {
                current_position = 3;
            }

            if (current_position == 1) {

                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel1').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })

            }
            if (current_position == 2) {
                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel2').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })
            }
            if (current_position == 3) {
                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel3').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })
            }

        });

        $('.team .arrow-right').on('click', function() {
            current_position++;

            if (current_position >= 4) {
                current_position = 1;
            }
            if (current_position == 1) {

                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel1').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })

            }
            if (current_position == 2) {
                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel2').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })
            }
            if (current_position == 3) {
                $('.team .content').animate({
                    opacity: 0.1,
                }, 400, function() {
                    $('.team .content').removeClass('active');
                    $('#js-carousel3').addClass('active');
                    $('.team .content').animate({
                        opacity: 1
                    }, 500)
                })
            }
        });
    }

  $('.newsletter .input-group .input-group-append .btn').on('click', function() {
    $('.newsletter .input-group').html('');
    $('.newsletter h3').html('Thank You :)');
    $('.newsletter').animate({
       height: 0,
       opacity: 0,
       padding: 0
     }, 1000, function() {
          $(this).remove();
       })

    });

});
//grįžimas į puslapio pradžią
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 799 || document.documentElement.scrollTop > 799) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
