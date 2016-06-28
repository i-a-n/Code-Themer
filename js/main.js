// non angular JS goes here
domReady =
	function() {
		var header = $('header');
		$(window).scroll(function(){
			if($(window).scrollTop() <= 30){
				header.css('box-shadow', '0px 0px ' + $(window).scrollTop() + 'px rgba(0, 0, 0, 0.4)');
			} else {
				header.css('box-shadow', '0px 0px 30px rgba(0, 0, 0, 0.4)');
			}
		});
	};
