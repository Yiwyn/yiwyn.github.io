$(function(event) {
	var menus = document.getElementsByClassName("menubtn");



	var cards = document.getElementsByClassName("cardClass");


	var slider = $(".slider");



	for (let i = 0; i < menus.length; i++) {
		menus[i].onmouseenter = function() {
			slider.css("left", (8 + i * 120).toString() + "px");
			ChangeCard(i);
		}
	}



	function ChangeCard(index) {
		tempCards = Array.from(cards);

		var temp = tempCards[index];
		for (let i = index; i > 0; i--) {
			tempCards[i] = tempCards[i - 1];
		}
		tempCards[0] = temp;

		for (let i = 0; i < tempCards.length; i++) {

			tempCards[i].style.zIndex = (0 - i).toString();
			tempCards[i].style.top = (i * 0.5).toString() + "rem";
			tempCards[i].style.left = (i * 0.5).toString() + "rem";

		}


	}



})
