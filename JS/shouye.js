$(function() {
	var header = $("#header");
	// header.css("height","5px");


	$(window).scroll(function() {
		var top = $(document).scrollTop();

		if (top > 10) {
			header.css("height", 0);
			
		}
		if (top == 0) {
			header.css("height", "100%");
		}
	})

})
