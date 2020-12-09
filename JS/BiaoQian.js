$(function() {


	var tags = $(".tag");

	var tagconten = $("#tagContent");

	var tagArray = Array.from(tags); // 拿到数组了 但是我后悔了 不打算用了 就这样 更好的效果以后有时间再说


	tagArray[tagArray.length - 1].onmousedown = function() {
		openContent();

	}

	var isOpen = false;

	function openContent() {
		if (!isOpen) {
			tagconten.css("transform", "scaleY(1)");
			isOpen = true;
		}
		else{
			tagconten.css("transform", "scaleY(0)");
			isOpen = false;
		}
	}

})
