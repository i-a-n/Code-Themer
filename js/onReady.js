var onReady = {
	'headerInit': function() {
		var header = $('header');
		$(window).scroll(function(){
			if ($(window).scrollTop() <= 20) {
				header.css('box-shadow', '0px 0px ' + $(window).scrollTop() + 'px rgba(0, 0, 0, 0.4)');
			} else {
				header.css('box-shadow', '0px 0px 20px rgba(0, 0, 0, 0.4)');
			}
		});
	},
	'toolbarControlInit': function() {
		var $toolbar = $('.toolbar');
		var $toolbarAndEditor = $('.toolbar, .editor');
		var $toolbarControl = $('.toolbar-control');

		$toolbarControl.click( function() {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open').addClass('closed');
				$toolbarAndEditor.css(
					"transform",
					"translateX(-" + ($toolbar.width() + 2) + "px)"
				);
				$('body').css("overflow", "hidden");
			}
			else {
				$(this).removeClass('closed').addClass('open');
				$toolbarAndEditor.css("transform", "none");
				$('body').css("overflow", "visible");
			}
		});
	}

}
