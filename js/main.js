// non angular JS goes here
domReady =
    function(){
        $('.js-accordionControl').click( function() {
            var $el = $(this);
            $('.js-accordionControl').addClass('inactive');
            setTimeout(
                function() {$el.removeClass('inactive')}, 350
            );
        });
    };
