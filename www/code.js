$(document).ready(function(){       
           var scroll_start = 0;
           var startchange = $('#about');
           var offset = startchange.offset();
           
        if (startchange.length){
           $(document).scroll(function() { 
              scroll_start = $(this).scrollTop();
              if(scroll_start > offset.top) {
                  $(".navbar-inverse").css('background-color', '#000000');
               } else {
                  $('.navbar-inverse').css('background-color', 'transparent');
               }
           });


            }


            (function($) {
            var $window = $(window),
                $va1 = $('#va');
                $va2 = $('#va2');

            function resize() {
                if ($window.width() < 768) {
                    $va2.removeClass('vertical-align')
                    return $va1.removeClass('vertical-align');
                }

                $va1.addClass('vertical-align');
                $va2.addClass('vertical-align');
                }
    
                $window
                    .resize(resize)
                    .trigger('resize');
                })(jQuery);

        });  

            $(".youtube-link").grtyoutube({
                autoPlay:true,
                theme: "dark"
            });